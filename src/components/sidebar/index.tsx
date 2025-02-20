import clsx from "clsx";
import logoLarge from "../../assets/logo-large.svg";
import { Tabs } from "../tabs";
import { Typography } from "../typography";
import { PiArrowFatLinesLeftFill } from "react-icons/pi";

type Props = {
 
}
export const Sidebar = ({}: Props) => {
 return ( 
  <aside 
   className={clsx(
    "fixed left-0 top-0 h-screen w-64 transition-all duration-300 z-50 bg-grey900 text-grey300 rounded-br-200 rounded-tr-200 flex flex-col gap-300"
   )}
  >
   <header className="px-400 py-500 rounded-tr-200">
    <img src={logoLarge} alt="Finance logo" />
   </header>

   <nav className="flex flex-col pr-300 gap-50">
    <Tabs />
   </nav>

   <footer className="fixed bottom-0 left-0 pb-300 px-400">
    <button>
     <Typography 
      fontWeight="bold" 
      fontSize="md" 
      color="grey300"
      customClass="flex items-center gap-200 hover:text-grey100 hover:cursor-pointer"
     >
     <PiArrowFatLinesLeftFill className="text-[1.5rem] " />
      Minimize menu
     </Typography>

    </button>
   </footer>
   
  </aside>
 );
}

