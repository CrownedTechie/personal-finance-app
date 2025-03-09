import { PiXCircleLight } from "react-icons/pi";
import { Button } from "../button";
import { ContentHeader } from "../contentHeader";
import { ModalWrapper } from "./ModalWrapper";
import { Typography } from "../typography";
import { useEffect, useRef, useState } from "react";

export const DeleteModal = ({}) => {
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
    title="Delete 'Savings'"
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
    Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever.   
   </Typography>

   <div className="flex flex-col gap-200">
     <Button variant="destroy">Yes, Confirm Deletion</Button>
     <Button variant="tertiary" rightArrowIcon={false}>No, Go Back</Button>
   </div>
   
  </ModalWrapper>
 );
}