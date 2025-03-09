import { PiXCircleLight } from "react-icons/pi";
import { Button } from "../button";
import { ContentHeader } from "../contentHeader";
import { ModalWrapper } from "./ModalWrapper";
import { Typography } from "../typography";
import { forwardRef, useEffect } from "react";

interface IDeleteModalProps {
 title: string;
 subText: string;
 onClose: () => void;
 onConfirm: () => void;
 onCancel: () => void;
 isOpen: boolean;
};

export const DeleteModal = forwardRef<HTMLDialogElement, IDeleteModalProps>
 (({title, subText, onClose, onCancel, onConfirm, isOpen}, ref) => {

  useEffect(() => {
   const dialogElement = ref as React.RefObject<HTMLDialogElement>;
   if (isOpen) {
    dialogElement.current.showModal();
   } else {
    dialogElement.current.close();
   }
  }, [isOpen, ref]);
  
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

    <div className="flex flex-col gap-200">
      <Button 
       variant="destroy" 
       onClick={onConfirm}
      >
       Yes, Confirm Deletion
      </Button>
      <Button 
       variant="tertiary" 
       rightArrowIcon={false}
       onClick={onCancel}
      >
       No, Go Back
      </Button>
    </div>
   </ModalWrapper>
  );
});