import { AuthImage } from "@/assets/svgs";
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

interface ILayoutProps {
  children: ReactNode;
}

export const AuthLayout = ({}) => {
 return ( 
  <main>
    <h1>This is the Auth Layout Page</h1>

    <aside>
      <AuthImage />
    </aside>
    <nav>
     <ul>
      <li>
       <Link to="login">Login</Link>
      </li>

      <li>
       <Link to="signup">Sign Up</Link>
      </li>
     </ul>
    </nav>

   <main>
     <Outlet />
   </main>
  </main>
 );
}