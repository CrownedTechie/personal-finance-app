// import React from "react";

import { Outlet } from "react-router-dom";

export const AppLayout = () => {
 return (  
  <>
   <h1>APP Layout</h1>

   <main>
    <Outlet />
   </main>
  </>
 );
}
 
// export default AppLayout;