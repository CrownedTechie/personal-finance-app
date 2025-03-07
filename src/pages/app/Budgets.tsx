import { BudgetsCard, Button, ContentHeader, DoughnutChart, Quote, Typography } from "@/components";
import { allColors, budgets, budgetsList } from "@/constants/data";
import { formattedAmount } from "@/utils/formatAmount";
import { useMemo } from "react";

type Props = {
 
}

export const Budgets = ({}: Props) => {
 const budgetsWithColors = useMemo(() => {
    const availableColors = [...allColors];
    return budgets.map(item => {
      const randomIndex = Math.floor(Math.random() * availableColors.length);
      const selectedColor = availableColors.splice(randomIndex, 1)[0];
  
      return { ...item, color: selectedColor };
    });
  }, []);

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

    <section className="flex flex-col gap-300">

     <article className="bg-white rounded-150 p-400">
      <DoughnutChart 
       data={budgetsList.map((item) => item.amountSpent)}
       backgroundColors={budgetsList.map(item => item.color)}
       overallBudget={budgetsList.reduce((sum, item) => sum + item.amountSpent, 0)}
      />
      <div>
       <Typography
        as="h2"
        fontWeight="bold"
        customClass="capitalize"
       >
        spending summary
       </Typography>
       <ul>
        {budgetsList.map(item => (
          <li>
           <Quote
            key={item.title}
            title={item.title}
            amount={formattedAmount(item.amountSpent).toLocaleString()}
            primaryBorderColor={item.color}
            customClass="flex-row items-center justify-between border"
           />
          </li>
          ))}
          
        
       </ul>
      </div>
     </article>

     <BudgetsCard
      title="entertainment" 
      coloredDot={""}
     />

    </section>
  </div>
 );
}