import { colorOptions, fruitOptions } from "@/constants/data";
import { ContentHeader } from "../contentHeader";
import { TextField } from "../textField";
import { Typography } from "../typography";
import { ModalWrapper } from "./ModalWrapper";
import { Button } from "../button";
import { forwardRef, useEffect, useRef, useState } from "react";
import { PiXCircleLight } from "react-icons/pi";

interface IModalProps {
 // modalRef: React.RefObject<HTMLDialogElement | null>;
 title: string;
 subText: string;
 buttonText: string;
 onClose: () => void;
 onAction: () => void;
};

export const EditOrAddModal = forwardRef<HTMLDialogElement, IModalProps>(({title, subText, buttonText, onAction, onClose}, ref) => {

 return ( 
  <ModalWrapper ref={ref}>
   <ContentHeader 
    as="h1"
    title={title}
    fontWeight="bold"
    buttonGroup={
     <Button 
      className="outline-none text-grey300 cursor-pointer"
      onClick={onClose}
     >
      <PiXCircleLight className="size-300 text-grey500" />
     </Button>
    }
   />

   <Typography
    color="grey500"
   >
    {subText}
   </Typography>

   <form className="flex flex-col gap-200" onSubmit={(e) => e.preventDefault()}>
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

    <Button 
     variant="primary" 
     customClass="capitalize"
     onClick={(e) => {
      e.preventDefault();
      onAction();
     }}
    >
     {buttonText}
    </Button>
   </form>
  </ModalWrapper>
 );
});
