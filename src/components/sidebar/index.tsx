import clsx from "clsx";
import logoLarge from "../../assets/logo-large.svg";
import { Tabs } from "../tabs";

type Props = {
 
}
export const Sidebar = ({}: Props) => {
 return ( 
  <aside 
   className={clsx(
    "fixed left-0 top-0 h-screen w-64 transition-all duration-300 z-50 bg-grey900 text-grey300 font-bold rounded-br-200 rounded-tr-200 flex flex-col justify-between"
   )}
  >
   <header>
    <img src={logoLarge} alt="Finance logo" />
   </header>

   <nav className="flex flex-col">
    <Tabs />
   </nav>

   <footer>
    <button>Minimize menu</button>
   </footer>
   
  </aside>
 );
}

