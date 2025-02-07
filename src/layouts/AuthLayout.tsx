import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

type Props = {
 
}
export const AuthLayout = ({}: Props) => {
 return ( 
  <div>
    <h1>This is the Auth Layout Page</h1>
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
  </div>
 );
}