import React from "react";
import { Button, ContentHeader, DoughnutChart, ListView, OverviewCard, Quote, SummaryCard } from "@/components";
import { useAuth } from "@/hooks/useAuth";
import { useData } from "@/hooks/useData";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { formattedAmount } from "@/utils/formatAmount";
import { PiPowerFill, PiTipJarLight } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { formattedDate } from "@/utils/formatDate";
import { getRecurringBills } from "@/utils/getRecurringBills";
import { useModifiedBudgets } from "@/hooks/useModifiedBudgets";

export const Overview = ({}) => {
  const { logout } = useAuth();
  const {balance, pots, transactions} = useData();
  const {budgetsWithColors, overallBudget, overallSpent} = useModifiedBudgets();
  const navigate = useNavigate();
  const isTabScreen = useMediaQuery("(max-width: 1023px)");
  const { totalDueSoon, totalPaidBills, totalUpcomingBills } = getRecurringBills();
  const totalSaved = pots.reduce((sum, item) => sum + item.total, 0);

  const recurringBillsSummary = [
    { id: 1, title: "paid bills", amount: totalPaidBills },
    { id: 2, title: "total upcoming", amount: totalUpcomingBills },
    { id: 3, title: "due soon", amount: totalDueSoon },
  ];

  const handleLogout = () => {
    logout();
    navigate("/");
  };

 return ( 
  <div className="flex flex-col h-auto gap-400">
   <header>
    <ContentHeader
     title="overview" 
     as="h1"
     fontWeight="bold"
     buttonGroup={ isTabScreen && 
      <Button 
        customClass="border-none flex items-center justify-center"
        onClick={handleLogout}
      >
          <PiPowerFill className="text-[2rem]"/>
      </Button>
     }
    />
   </header>

   <section>
    <div className="flex flex-col justify-center">
     {/* Summary cards section */}
     <div className="flex flex-col md:flex-row md:items-center gap-150">
        <SummaryCard
         variant="primary" 
         title="current balance"
         content={formattedAmount(balance.current)}
        />
        <SummaryCard
         variant="tertiary"
         title="income"
         content={formattedAmount(balance.income)}
        />
        <SummaryCard 
         variant="tertiary"
         title="expenses"
         content={formattedAmount(balance.expenses)}
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
         onClick={() => navigate("/pots")}
        >
         <div className="grid grid-cols-1 md:grid-cols-2 gap-250">
          <SummaryCard
           variant="secondary" 
           title="total saved"
           content={`$${totalSaved}`}
           icon={<PiTipJarLight className="size-500" />}
          />
          <div className="grid grid-cols-2 place-items-center gap-200">
           {pots.slice(0, 4).map(item => (
            <Quote
             key={item.name}
             variant='primary'
             title={item.name}
             amount={`$${item.total}`}
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
         onClick={() => navigate("/transactions")}
        >
         <ul className="flex flex-col justify-center">
          {transactions.slice(0, 5).map((item, index) => (
            <React.Fragment
              key={item.date}
            >
              <ListView
                profilePicture={item.avatar} 
                name={item.name}
                amount={formattedAmount(item.amount)}
                date={formattedDate(item.date, 'd MMM yyyy')}
                customClass="border-b-0 py-200"

              />
              {index !== transactions.slice(0, 5).length - 1 && <hr className="text-grey500 opacity-15"/> }
            </React.Fragment>
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
         onClick={() => navigate("/budgets")}
         >
          <div className="flex flex-col items-center md:grid md:grid-cols-4 gap-200 xl:h-[20rem]">
           <div className="md:col-span-3 flex justify-center">
            <DoughnutChart 
              data={budgetsWithColors.map((item) => item.maximum)}
              backgroundColors={budgetsWithColors.map(item => item.color ?? item.theme)}
              overallBudget={overallBudget}
              overallSpent={Math.abs(overallSpent)}
            />
           </div>

           <div className="self-start md:self-center w-full grid grid-cols-2 md:grid-cols-1 gap-200">
            {budgetsWithColors.map(item => (
             <Quote
              key={new Date().getTime() + item.category}
              title={item.category}
              amount={formattedAmount(item.maximum)}
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
         onClick={() => navigate("/recurring-bills")}
         >
          <div className="flex flex-col items-center gap-150 ">
            {recurringBillsSummary.map(item => (
              <Quote
              key={item.id}
              variant="secondary" 
              title={item.title}
              amount={formattedAmount(item.amount).replace("-", "")}
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