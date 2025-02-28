import { ContentHeader } from "@/components";
import { Table } from "@/components/table";

export const Transactions = ({}) => {
 
 return ( 
  <div className="flex flex-col gap-400 h-auto ">
   <header>
    <ContentHeader
     title="transactions" 
     as="h1"
     fontWeight="bold"
    />
   </header>

   <section>
    <Table />
   </section>
  </div>
 );
}