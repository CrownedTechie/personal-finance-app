import React, { useEffect, useRef, useState } from "react";
import { BudgetsCard, Button, ContentHeader, DoughnutChart, EditOrAddModal, Quote, TextField, Typography } from "@/components";
import { budgetsList, categoryOptions, colorOptions } from "@/constants/data";
import { formattedAmount } from "@/utils/formatAmount";

export const Budgets = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [modalType, setModalType] = useState<string | null>(null);
  const isAddModal = modalType === "add";
  const isEditModal = modalType === "edit";

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
        data={budgetsList.map((item) => item.amountSpent)}
        backgroundColors={budgetsList.map(item => item.color)}
        overallBudget={budgetsList.reduce((sum, item) => sum + item.amountSpent, 0)}
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
        {budgetsList.map((item, index) => (
          <React.Fragment key={item.title}>
            <Quote
            title={item.title}
            titleElement="p"
            totalBudget={formattedAmount(item.totalBudget)}
            amount={formattedAmount(item.amountSpent)}
            amountElement="h4"
            primaryBorderColor={item.color}
            customClass="flex-row items-center justify-between w-full"
            />
      
          {index !== budgetsList.length - 1 && 
            <hr className="text-grey100" /> 
          }
          </React.Fragment>
        ))}
        </ul>
      </div>
      </article>

      {/* Budget cards */}
      <div className="flex flex-col justify-center gap-300 xl:col-span-3">
      {budgetsList.map(item => (
        <BudgetsCard
          key={item.title}
          title={item.title} 
          itemColor={item.color}
          amountSpent={item.amountSpent}
          totalBudget={item.totalBudget}
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
          fieldName=""
          fieldType="select"
          labelText="budget category"
          selectOptions={categoryOptions}
          selectDefaultValue={categoryOptions[1]}
        />
        <TextField
          id=""
          fieldName=""
          inputType="text"
          labelText="maximum spend"
          inputPlaceholder="e.g. 2000"
          prefix
        />
        <TextField
          id=""
          fieldName=""
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