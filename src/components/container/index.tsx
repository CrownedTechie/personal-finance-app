import clsx from "clsx";
import { ReactNode } from "react";

interface IContainerProps {
 children: ReactNode;
};

export const Container = ({children}: IContainerProps) => {
 return ( 
  <div className={clsx(
   "py-400 px-500 transition-margin duration-350 w-full overflow-y-scroll"
  )}
  > 
   <div className="max-w-[71.25rem] mx-auto">{children}</div>
  </div>
 );
};