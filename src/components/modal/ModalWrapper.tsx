import { forwardRef, ReactNode } from "react";

interface IModalWrapperProps extends React.DialogHTMLAttributes<HTMLDialogElement> {
 children: ReactNode;
};

export const ModalWrapper = forwardRef<HTMLDialogElement, IModalWrapperProps> 
 (({children, ...props}, ref) => {
  return ( 
   <dialog
    ref={ref}
    className="bg-white fixed inset-1/2 -translate-x-1/2 -translate-y-1/2 rounded-150 px-250 py-300 md:p-400 flex flex-col gap-250 shadow-md w-[90%] md:w-[35rem] min-h-fit"
    {...props}
   >
    {children}
   </dialog>
  );
});