import { colorOptions, fruitOptions } from "@/constants/data";
import { ContentHeader } from "../contentHeader";
import { TextField } from "../textField";
import { Typography } from "../typography";
import { ModalWrapper } from "./ModalWrapper";
import { Button } from "../button";
import { useEffect, useRef, useState } from "react";
import { PiXCircleLight } from "react-icons/pi";

interface IModalProps {

};

export const Modal = ({}: IModalProps) => {
 const modalRef = useRef<HTMLDialogElement>(null);
 const [isOpen, setIsOpen] = useState(true);

 useEffect(() => {
  if (isOpen) {
   modalRef.current?.showModal();
  } 
 }, [isOpen]);

 return ( 
  <ModalWrapper ref={modalRef}>
   <ContentHeader 
    as="h1"
    title="Add New Pot"
    fontWeight="bold"
    buttonGroup={
     <Button 
      className="outline-none text-grey300 cursor-pointer"
     >
      <PiXCircleLight className="size-300 text-grey500" />
     </Button>
    }
   />

   <Typography
    color="grey500"
   >
    Choose a category to set a spending budget. These categories can help you monitor spending.
   </Typography>

   <form className="flex flex-col gap-200">
    <TextField
     fieldType="select"
     labelText="Field Without Color Tag"
     selectOptions={fruitOptions}
     selectPlaceholder="Select a fruit..."
    />
    <TextField
     inputType="text"
     labelText="Field With Prefix"
     prefix
    />
    <TextField
     fieldType="select"
     labelText="Field With Color Tag" 
     selectOptions={colorOptions}
     selectDefaultValue={colorOptions[0]}
    />

    <Button variant="primary">
     Add Budget
    </Button>
   </form>
  </ModalWrapper>
 );
};