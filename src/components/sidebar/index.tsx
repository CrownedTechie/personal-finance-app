import clsx from "clsx";
import logoLarge from "../../assets/logo-large.svg";
import logoSmall from "../../assets/logo-small.svg";
import { Tabs } from "../tabs";
import { Typography } from "../typography";
import { PiArrowFatLinesLeftFill, PiArrowFatLinesRightFill } from "react-icons/pi";

interface ISidebarProps {
 isOpen: boolean;
 setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar = ({isOpen, setIsOpen}: ISidebarProps) => {
 const toggleSidebar = () => {
  setIsOpen(prevState => !prevState);
 };

 return ( 
  <>
   <aside 
    className={clsx(
     "fixed left-0 top-0 h-screen duration-350 z-50 bg-grey900 text-grey300 rounded-br-200 rounded-tr-200 lg:flex flex-col gap-300 hidden",
     isOpen ? "w-[18.75rem]  transition-transform transform " : "w-[5.5rem] -translate-x-0 "
    )}
   >
    <header className="px-400 py-500 rounded-tr-200">
     <img src={isOpen ? logoLarge : logoSmall} alt="Finance logo" />
    </header>

    <nav className={clsx(
     "flex flex-col gap-50",
      isOpen ? "pr-300" : "pr-100"
     )}
    >
     <Tabs 
      isOpen={isOpen}
     />
    </nav>

    <footer 
     className={clsx(
      "fixed bottom-0 left-0 flex items-center py-200 px-400 mb-300",
      isOpen ? "w-[18.75rem]" : "w-[5.5rem]"
     )}
    >
     <button onClick={toggleSidebar}>
      <Typography 
       fontWeight="bold" 
       fontSize="md" 
       color="grey300"
       customClass="flex items-center gap-200 hover:text-grey100 hover:cursor-pointer"
      >
       {isOpen 
        ? <PiArrowFatLinesLeftFill className="text-[1.5rem]" /> 
        : <PiArrowFatLinesRightFill className="text-[1.5rem]" />
       }
       {isOpen && "Minimize menu"}
      </Typography>
     </button>
    </footer>
   </aside>

   {/* NAV FOR MOBILE AND TABS */}
    <nav
     className="bg-grey900 fixed z-50 bottom-0 left-0 right-0 justify-between w-full px-200 md:px-500 pt-100 flex items-center lg:hidden"
    >
     <Tabs 
     />
    </nav>
  </>
 );
}

