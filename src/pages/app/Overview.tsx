import { ContentHeader, SummaryCard } from "@/components";

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

     {/* Summary section */}
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

     {/*  */}


    </div>
   </section>
  </div>
 );
};