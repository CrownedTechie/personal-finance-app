import { Button, ContentHeader } from "@/components";
import { PotsCard } from "@/components/cards/PotsCard";
import { potsList } from "@/constants/data";

type Props = {
 
}
export const Pots = ({}: Props) => {
 return ( 
  <div className="flex flex-col gap-400">
   <header>
    <ContentHeader
     title="pots" 
     as="h1"
     fontWeight="bold"
     buttonGroup={
     <Button
      variant="primary"
     >
      + Add New Pot
     </Button>
     }
    />
   </header>

   <section className="grid grid-cols-1 xl:grid-cols-2 gap-300">
    {potsList.map(item => (
     <PotsCard 
      title={item.title}
      itemColor={item.color}
      totalSaved={item.totalSaved}
      targetAmount={item.targetAmount}
     />
    ))}
   </section>
  </div>
 );
}