import { ReactNode } from "react";

interface ICardWrapperProps {
 children?: ReactNode;
};

export const CardWrapper = ({ children }: ICardWrapperProps) => {
 return ( 
  <article className="bg-white rounded-150 h-auto p-400">
   {children}
  </article>
 );
};