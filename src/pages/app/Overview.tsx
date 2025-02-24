import { ContentHeader, DoughnutChart, ListView, OverviewCard, Quote, SummaryCard } from "@/components";
import { recurringBills, savingsOptions, transactions } from "@/constants/data";
import { PiTipJarLight } from "react-icons/pi";

export const Overview = ({}) => {
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
      <div className="my-400 grid grid-cols-1 gap-300">
       {/* Pots Overview card */}
       <OverviewCard 
        cardTitle="pots"
        buttonTitle="see details"
        customClass="gap-250"
       >
        <div>
         <SummaryCard
          variant="secondary" 
          title="total saved"
          content="$850"
          icon={<PiTipJarLight className="size-500" />}
         />
         <div className="mt-250 grid grid-cols-2 gap-200">
          {savingsOptions.map(item => (
           <Quote
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
           profilePicture={item.profilePicture} 
           name={item.name}
           amount={item.amount}
           date={item.date}
          />
         ))}
        </ul>
       </OverviewCard>

       {/* Budgets overview card */}
       <OverviewCard
        cardTitle="budgets"
        buttonTitle="see details"
       >
        <div>
         <DoughnutChart />
         <div></div>
        </div>
       </OverviewCard>

       {/* Recurring bills overview card*/}
       <OverviewCard
        cardTitle="recurring bills"
        buttonTitle="see details"
       >
        <div className="flex flex-col items-center gap-150">
         {recurringBills.map(item => (
          <Quote
            variant="secondary" 
            title={item.title}
            amount={item.amount}
          />
         ))}
        </div>
       </OverviewCard>
      </div>

    </div>
   </section>
  </div>
 );
};