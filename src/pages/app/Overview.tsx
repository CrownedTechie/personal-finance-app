import { ContentHeader, DoughnutChart, ListView, OverviewCard, Quote, SummaryCard } from "@/components";
import { allColors, budgets, recurringBills, savingsOptions, transactions } from "@/constants/data";
import { formattedAmount } from "@/utils/formatAmount";
import { useMemo } from "react";
import { PiTipJarLight } from "react-icons/pi";

export type BudgetProps = {
  title: string;
  amountSpent: number;
  color: string;
};

export const Overview = ({}) => {
  const budgetsWithColors = useMemo(() => {
    const availableColors = [...allColors];
    return budgets.map(item => {
      const randomIndex = Math.floor(Math.random() * availableColors.length);
      const selectedColor = availableColors.splice(randomIndex, 1)[0];

      return { ...item, color: selectedColor };
    });
}, []);

 return ( 
  <div className="flex flex-col h-auto gap-400">
   <header>
    <ContentHeader
     title="overview" 
     as="h1"
     fontWeight="bold"
    />
   </header>

   <section>
    <div className="flex flex-col justify-center">
     {/* Summary cards section */}
     <div className="flex flex-col md:flex-row md:items-center gap-150">
        <SummaryCard
         variant="primary" 
         title="current balance"
         content="$4,836.00"
        />
        <SummaryCard
         variant="tertiary"
         title="income"
         content="$3,814.25"
        />
        <SummaryCard 
         variant="tertiary"
         title="expenses"
         content="$1,700.50"
        />
     </div>

     {/* Other cards section */}
      <div className="my-400 grid grid-cols-1 xl:grid-cols-2 gap-300">

       {/* col 1 */}
       <div className="grid grid-cols-1 gap-300">
        {/* Pots Overview card */}
        <OverviewCard 
         cardTitle="pots"
         buttonTitle="see details"
         customClass="gap-250"
        >
         <div className="grid grid-cols-1 md:grid-cols-2 gap-250">
          <SummaryCard
           variant="secondary" 
           title="total saved"
           content="$850"
           icon={<PiTipJarLight className="size-500" />}
          />
          <div className="grid grid-cols-2 place-items-center gap-200">
           {savingsOptions.map(item => (
            <Quote
             key={item.title}
             variant='primary'
             title={item.title}
             amount={item.amount}
            />
           ))}
          </div>
         </div>
        </OverviewCard>

        {/* Transactions overview card*/}
        <OverviewCard
         cardTitle="transactions"
         buttonTitle="see details"
         customClass="gap-400"
        >
         <ul className="flex flex-col justify-center">
          {transactions.map(item => (
           <ListView
            key={item.name}
            profilePicture={item.profilePicture} 
            name={item.name}
            amount={item.amount}
            date={item.date}
           />
          ))}
         </ul>
        </OverviewCard>
       </div>
       
        {/* col 2 */}
        <div className="grid grid-cols-1 gap-300 ">
         {/* Budgets overview card */}
         <OverviewCard
          cardTitle="budgets"
          buttonTitle="see details"
          customClass="gap-250"
         >
          <div className="flex flex-col items-center md:grid md:grid-cols-4 gap-200 xl:h-[20rem]">
           <div className="md:col-span-3 flex justify-center">
            <DoughnutChart 
              data={budgetsWithColors.map((item) => item.amountSpent)}
              backgroundColors={budgetsWithColors.map(item => item.color)}
              overallBudget={budgetsWithColors.reduce((sum, item) => sum + item.amountSpent, 0)}
            />
           </div>

           <div className="self-start md:self-center w-full grid grid-cols-2 md:grid-cols-1 gap-200">
            {budgetsWithColors.map(item => (
             <Quote
              key={item.title}
              title={item.title}
              amount={formattedAmount(item.amountSpent).toLocaleString()}
              primaryBorderColor={item.color}
             />
            ))}
           </div>
          </div>
         </OverviewCard>

         {/* Recurring bills overview card*/}
         <OverviewCard
          cardTitle="recurring bills"
          buttonTitle="see details"
          customClass="gap-400"
         >
          <div className="flex flex-col items-center gap-150 ">
           {recurringBills.map(item => (
            <Quote
              key={item.title}
              variant="secondary" 
              title={item.title}
              amount={item.amount}
            />
           ))}
          </div>
         </OverviewCard>
        </div>
       
      </div>
    </div>
   </section>
  </div>
 );
};