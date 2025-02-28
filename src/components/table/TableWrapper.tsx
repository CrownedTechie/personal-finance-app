import { ReactNode } from "react";

interface ITableWrapperProps {
 children: ReactNode;
};

export const TableWrapper = ({children}: ITableWrapperProps) => {
 return ( 
  <div className="bg-white rounded-150 p-400">
   {children}
  </div>
 );
};