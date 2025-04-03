import { ReactNode } from "react";

interface IAuthWrapperProps {
 children: ReactNode;
}

export const AuthWrapper = ({children}: IAuthWrapperProps) => {
 return ( 
  <section className="bg-white h-auto w-[35rem] rounded-150 p-400">
   {children}
  </section>
 );
}