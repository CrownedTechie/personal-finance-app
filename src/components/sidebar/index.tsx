import { LogoLarge, LogoSmall } from "@/assets/svgs";
import clsx from "clsx";
import { PiArrowFatLinesLeftFill, PiArrowFatLinesRightFill, PiPowerFill } from "react-icons/pi";
import { Tabs } from "../tabs";
import { Typography } from "../typography";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

interface ISidebarProps {
 isOpen: boolean;
 setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Sidebar = ({isOpen, setIsOpen}: ISidebarProps) => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(prevState => !prevState);
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

 return ( 
  <>
   <aside 
    className={clsx(
     "sticky left-0 top-0 h-screen duration-100 z-50 bg-grey900 text-grey300 rounded-br-200 rounded-tr-200 lg:flex flex-col gap-300 hidden transform ",
     isOpen ? "w-[18.75rem] transition-transform " : "w-[5.5rem] -translate-x-0 "
    )}
   >
    <header className="px-400 py-500 rounded-tr-200">
     {isOpen ? <LogoLarge /> : <LogoSmall />}
    </header>

    <nav className={clsx(
     "flex flex-col flex-1 gap-50 max-h-[50rem] overflow-y-scroll",
      isOpen ? "pr-300" : "pr-100"
     )}
    >
     <Tabs 
      isOpen={isOpen}
     />
    </nav>

    <footer 
     className={clsx(
      "sticky bottom-0 left-0 flex flex-col gap-400 py-200 px-400 mb-300 "
     )}
    >
      <button onClick={handleLogout}>
        <Typography
        fontWeight="bold" 
        fontSize="md" 
        color="grey300"
        customClass="flex items-center gap-200 hover:text-grey100 hover:cursor-pointer"
        >
          <PiPowerFill className="text-[1.5rem]" />
          {isOpen && "Logout"}
        </Typography>
      </button>
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
     className="bg-grey900 sticky z-50 bottom-0 left-0 justify-between w-full px-200 md:px-500 pt-100 flex items-center lg:hidden"
    >
     <Tabs 
     />
    </nav>
  </>
 );
}

