import { Container, Sidebar } from "@/components";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
 const [isOpen, setIsOpen] = useState<boolean>(true);

 return (  
  <div className="border-blue flex flex-col-reverse lg:flex-row w-screen max-h-screen bg-beige100">
   <Sidebar 
    isOpen={isOpen}
    setIsOpen={setIsOpen}
   />

   <Container>
    <Outlet />
   </Container> 
  </div>
 );
};