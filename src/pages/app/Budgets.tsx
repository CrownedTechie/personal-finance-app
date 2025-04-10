import React, { useEffect, useRef, useState } from "react";
import { BudgetsCard, Button, ContentHeader, DoughnutChart, EditOrAddModal, Quote, TextField, Typography } from "@/components";
import { categoryOptions, colorOptions } from "@/constants/data";
import { formattedAmount } from "@/utils/formatAmount";
import { useData } from "@/hooks/useData";
import { TransactionProps } from "@/constants/types";

interface IModifiedBudgets {
  category: string;
  amountSpent: number;
  maximum: number;
  theme: string;
  latestSpendings: TransactionProps[];
}

export const Budgets = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [modalType, setModalType] = useState<string | null>(null);
  const {budgets, transactions} = useData();
  const isAddModal = modalType === "add";
  const isEditModal = modalType === "edit";

  const mapTransactionsToBudgets = (budgetData: any): IModifiedBudgets => {
    const latestSpendings = transactions.filter(item => item.category === budgetData.category);
    const amountSpent = latestSpendings.reduce((sum, item) => sum + item.amount, 0);

    return {
      category: budgetData.category,
      amountSpent,
      maximum: budgetData.maximum,
      theme: budgetData.theme,
      latestSpendings
    }
  };

  const modifiedBudgets: IModifiedBudgets[] = budgets.map(item => mapTransactionsToBudgets(item));

  useEffect(() => {
    if (modalType) {
     modalRef.current?.showModal();
    } 
  }, [modalType]);

  const handleOpenModal = (type: string) => {
    setModalType(type);
  };

  const handleCloseModal = () => {
    modalRef.current?.close();
    setModalType(null);
  };

  const handleAction = () => {
   console.log(
    isAddModal 
     ? "Adding budget..." 
     : isEditModal 
      ? "Saving changes..." 
      : null
   );
   handleCloseModal();
  };
  

  return ( 
    <div className="flex flex-col gap-400">
    <header>
      <ContentHeader
      title="budgets" 
      as="h1"
      fontWeight="bold"
      buttonGroup={
      <Button
        variant="primary"
        onClick={() => handleOpenModal("add")}
      >
        + Add New Budget
      </Button>
      }
      />
    </header>

    <section className="grid grid-cols-1 xl:grid-cols-5 gap-300">
      {/* Spending summary card */}
      <article className="bg-white rounded-150 px-250 py-300 md:p-400 max-h-[37.5rem] xl:col-span-2 flex flex-col gap-300 md:flex-row md:gap-400 xl:gap-300 xl:flex-col">
      <div className="place-self-center">
        <DoughnutChart 
          data={modifiedBudgets.map((item) => item.maximum)}
          backgroundColors={modifiedBudgets.map(item => item.theme)}
          overallBudget={modifiedBudgets.reduce((sum, item) => sum + item.maximum, 0)}
        />
      </div>
      <div className=" flex flex-col gap-300 w-full">
        <Typography
        as="h2"
        fontWeight="bold"
        customClass="capitalize"
        >
        spending summary
        </Typography>
        <ul className="flex flex-col justify-center gap-200">
        {modifiedBudgets.map((item, index) => (
          <React.Fragment key={new Date().getTime() + item.category}>
            <Quote
              title={item.category}
              titleElement="p"
              totalBudget={formattedAmount(item.maximum)}
              amount={formattedAmount(item.amountSpent).replace("-", "")}
              amountElement="h4"
              primaryBorderColor={item.theme}
              customClass="flex-row items-center justify-between w-full"
            />
      
          {index !== modifiedBudgets.length - 1 && 
            <hr className="text-grey100" /> 
          }
          </React.Fragment>
        ))}
        </ul>
      </div>
      </article>

      {/* Budget cards */}
      <div className="flex flex-col justify-center gap-300 xl:col-span-3">
      {modifiedBudgets.map(item => (
        <BudgetsCard
          key={new Date().getTime() + item.category}
          title={item.category} 
          itemColor={item.theme}
          amountSpent={item.amountSpent}
          totalBudget={item.maximum}
          latestSpendings={item.latestSpendings}
          handleOpenModal={handleOpenModal}
        />
      ))}
      
      </div>
    </section>

    {modalType && (
      <EditOrAddModal 
        ref={modalRef}
        title={isAddModal ? "add new budget" : "edit budget"}
        subText={isAddModal ? "Choose a category to set a spending budget. These categories can help you monitor spending." : "As your budgets change, feel free to update your spending limits."}
        buttonText={isAddModal ? "add budget" : "save changes"}
        onAction={handleAction}
        onClose={handleCloseModal}
      >
        <TextField
          id=""
          fieldname=""
          fieldType="select"
          labelText="budget category"
          selectOptions={categoryOptions}
          selectDefaultValue={categoryOptions[1]}
        />
        <TextField
          id=""
          fieldname=""
          inputType="text"
          labelText="maximum spend"
          inputPlaceholder="e.g. 2000"
          prefix
        />
        <TextField
          id=""
          fieldname=""
          fieldType="select"
          labelText="theme" 
          selectOptions={colorOptions}
          selectDefaultValue={colorOptions[0]}
        />
      </EditOrAddModal>
    )}
    </div>
  );
}