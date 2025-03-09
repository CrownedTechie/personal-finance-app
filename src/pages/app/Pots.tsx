import { Button, ContentHeader, DeleteModal, EditOrAddModal, PotsCard } from "@/components";
import { potsList } from "@/constants/data";
import { useEffect, useRef, useState } from "react";

export const Pots = () => {
 const modalRef = useRef<HTMLDialogElement>(null);
 const [modalType, setModalType] = useState<string | null>(null);
 // const [isModalOpen, setIsModalOpen] = useState(false);

 useEffect(() => {
  if (modalType) {
   modalRef.current?.showModal();
  }
 }, [modalType]);

 const handleOpenModal = (type: string) => {
  setModalType(type);
 };

 const handleCloseModal = () => {
  modalRef.current?.close();
  setModalType(null);
 };

 const handleAction = () => {
   console.log(modalType === "add" ? "Adding pot..." : "Saving changes...");
   handleCloseModal();
 };

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
      onClick={() => handleOpenModal("add")}
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

   {modalType && (
    <EditOrAddModal 
     ref={modalRef}
     title={modalType === "add" ? "add new pot" : "edit pot"}
     subText="Create a pot to set savings targets. These can help keep you on track as you save for special purchases."
     buttonText={modalType === "add" ? "add pot" : "save changes"}
     onAction={handleAction}
     onClose={handleCloseModal}
   />
   )}
   
   {/* <DeleteModal /> */}
  </div>
 );
}