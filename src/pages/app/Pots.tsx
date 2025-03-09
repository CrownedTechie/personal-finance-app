import { Button, ContentHeader, Modal, PotsCard } from "@/components";
import { potsList } from "@/constants/data";

export const Pots = () => {
 // if (isOpen) {
 //  dialogRef.current?.showModal();
 // } else {
 //  dialogRef.current?.close();
 // }

 // const toggleModal = () => {
 //  setIsOpen(prev => !prev)
 // };

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
      key={item.title}
      title={item.title}
      itemColor={item.color}
      totalSaved={item.totalSaved}
      targetAmount={item.targetAmount}
     />
    ))}
   </section>
   <Modal />
  </div>
 );
}