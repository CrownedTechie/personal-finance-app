import { BillsSummaryList, ContentHeader, SummaryCard } from "@/components";
import { billsSummaryList } from "@/constants/data";
import React from "react";
import { PiReceiptLight } from "react-icons/pi";

type Props = {
 
}
export const RecurringBills = ({}: Props) => {
 return ( 
  <div className="flex flex-col gap-400">
   <header>
    <ContentHeader
     title="recurring bills" 
     as="h1"
     fontWeight="bold"
    />
   </header>

   <section className="grid grid-cols-2">
    <div className="flex flex-col justify-center gap-300">
     <SummaryCard
      variant="primary" 
      title="total bills"
      content="$384.98"
      icon={<PiReceiptLight className="size-500" />}
      customClass="items-start flex-col justify-center"
     />

     <article className="bg-white rounded-150 p-250 flex flex-col justify-center gap-250">
      <ContentHeader 
       title="summary"
       as="h4"
       fontWeight="bold"
      />

      <ul className="flex flex-col justify-center gap-200">
       {billsSummaryList.map((item, index) => (
        <React.Fragment key={item.title}>
         <BillsSummaryList
          title={item.title} 
          totalAmount={item.totalAmount}
          noOfTransactions={item.noOfTransactions}
         />
         {index !== billsSummaryList.length - 1 && 
          <hr className="text-grey500 opacity-15"/> 
         }
        </React.Fragment>
       ))}
      </ul>

     </article>
    </div>

    {/* Recurring bills table */}
    <div></div>
   </section>
  </div>
 );
}