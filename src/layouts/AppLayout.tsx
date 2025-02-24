import { Container, Sidebar } from "@/components";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
 const [isOpen, setIsOpen] = useState<boolean>(true);

 return (  
  <body className="flex flex-col-reverse lg:flex-row w-screen max-h-screen">
   <Sidebar 
    isOpen={isOpen}
    setIsOpen={setIsOpen}
   />

   <Container>
    <Outlet />
   </Container>
  </body>
 );
};