import React from "react";
import { BudgetsCard, Button, ContentHeader, DoughnutChart, Quote, Typography } from "@/components";
import { budgetsList } from "@/constants/data";
import { formattedAmount } from "@/utils/formatAmount";

export const Budgets = () => {
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
       title={item.title} 
       itemColor={item.color}
       latestSpendings={item.latestSpendings}
      />
     ))}
     
    </div>
   </section>
  </div>
 );
}