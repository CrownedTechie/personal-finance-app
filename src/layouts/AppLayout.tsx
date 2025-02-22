// import React from "react";

import { Outlet } from "react-router-dom";

export const AppLayout = () => {
 return (  
  <>
   <h1>APP Layout</h1>

   {/* Just side bar and container that will be here */}

   <main>
    <Outlet />
   </main>
  </>
 );
}
 
// export default AppLayout;