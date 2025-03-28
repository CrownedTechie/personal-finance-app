import clsx from "clsx";
import { ReactNode } from "react";

interface IContainerProps {
 children: ReactNode;
};

export const Container = ({children}: IContainerProps) => {
 return ( 
  <main className={clsx(
   "py-300 px-200 md:py-400 md:px-500 transition-margin duration-350 w-full h-screen overflow-y-scroll "
  )}
  > 
   <div className="max-w-[71.25rem] mx-auto">{children}</div>
  </main>
 );
};