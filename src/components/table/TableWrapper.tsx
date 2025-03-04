import { ReactNode } from "react";

interface ITableWrapperProps {
 children: ReactNode;
};

export const TableWrapper = ({children}: ITableWrapperProps) => {
 return ( 
  <div className="bg-white rounded-150 px-250 py-300 md:p-400">
   {children}
  </div>
 );
};