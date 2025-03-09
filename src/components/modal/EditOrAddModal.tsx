import { ContentHeader } from "../contentHeader";
import { Typography } from "../typography";
import { ModalWrapper } from "./ModalWrapper";
import { Button } from "../button";
import { forwardRef, ReactNode } from "react";
import { PiXCircleLight } from "react-icons/pi";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface IEditOrAddModalProps {
 title: string;
 subText: string;
 buttonText: string;
 children: ReactNode;
 onClose: () => void;
 onAction: () => void;
};

export const EditOrAddModal = forwardRef<HTMLDialogElement, IEditOrAddModalProps>
 (({title, subText, buttonText, children, onAction, onClose}, ref) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
 
  return ( 
   <ModalWrapper ref={ref}>
    <ContentHeader 
     as={isDesktop ? "h1" : "h2"}
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
     {children}
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
