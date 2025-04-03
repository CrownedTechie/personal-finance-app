import { Button, ContentHeader, EditOrAddModal, PotsCard, TextField } from "@/components";
import { colorOptions, potsList } from "@/constants/data";
import { useEffect, useRef, useState } from "react";

export const Pots = () => {
 const modalRef = useRef<HTMLDialogElement>(null);
 const [modalType, setModalType] = useState<string | null>(null);

 const isAddModal = modalType === "add";
 const isEditModal = modalType === "edit";

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
   console.log(
    isAddModal
     ? "Adding pot..." 
     : isEditModal
      ? "Saving changes..." 
      : null
   );
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
      handleOpenModal={handleOpenModal}
     />
    ))}
   </section>

   {modalType && (
    <EditOrAddModal 
     ref={modalRef}
     title={isAddModal ? "add new pot" : "edit pot"}
     subText={isAddModal ? "Create a pot to set savings targets. These can help keep you on track as you save for special purchases." : "If your saving targets change, feel free to update your pots."}
     buttonText={modalType === "add" ? "add pot" : "save changes"}
     onAction={handleAction}
     onClose={handleCloseModal}
    >
     <TextField 
      id="potName"
      fieldName="potName"
      inputType="text"
      labelText="pot name"
      inputPlaceholder="e.g. Rainy Days"
      helperText="30 characters left"
     />
     <TextField
      id="target"
      fieldName="target"
      inputType="text"
      labelText="target"
      inputPlaceholder="e.g. 2000"
      prefix
     />
     <TextField
      id="theme"
      fieldName="theme"
      fieldType="select"
      labelText="theme" 
      selectOptions={colorOptions}
      selectDefaultValue={colorOptions[0]}
     />
    </EditOrAddModal>
   )}
  </div>
 );
}