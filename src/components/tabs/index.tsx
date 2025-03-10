import { NavLink} from "react-router-dom";
import { PiArrowsDownUpFill, PiHouseFill, PiChartDonutFill, PiReceiptFill, PiTipJarFill } from "react-icons/pi";
import clsx from "clsx";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Typography } from "../typography";

const tabs = [
 {name: "Overview", location:"overview", icon: <PiHouseFill />},
 {name: "Transactions", location:"transactions", icon: <PiArrowsDownUpFill />},
 {name: "Budgets", location:"budgets", icon: <PiChartDonutFill />},
 {name: "Pots", location:"pots", icon: <PiTipJarFill />},
 {name: "Recurring bills", location:"recurring-bills", icon: <PiReceiptFill />},
];

interface ITabsProps {
 isOpen?: boolean;
};

export const Tabs = ({isOpen}: ITabsProps) => {
 const isTabScreen = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
 const isLargeScreen = useMediaQuery("(min-width: 1024px)");
 
 return (
  <>
   {tabs.map(tab => (
    <NavLink 
     key={tab.name}
     to={tab.location}
     className={({isActive}) => 
      clsx(
       `flex items-center rounded-tl-150 rounded-tr-150 lg:rounded-tl-none lg:rounded-tr-150 lg:rounded-br-150 lg:gap-200 py-100 px-200 md:px-400 lg:py-200 transition-transform duration-350 ease-out`,
        !isActive && "hover:*:text-beige100 transform hover:scale-110",
        isActive && "bg-beige100 border-b-4 border-b-green lg:border-b-0 lg:border-l-4 lg:border-l-green",
        isTabScreen ? "flex-col" : "flex-row",
      )
     }
    >
    {({ isActive }) => (
      <>
       <Typography
        color={isActive ? "green" : "grey300"}
        fontWeight="bold"
        customClass="text-[1.25rem] md:text-[1.5rem]"
       >
        {tab.icon}
       </Typography>
       {((isOpen && isLargeScreen) || isTabScreen) && (
        <Typography
         color={isActive ? "grey900" : "grey300"}
         fontSize={isTabScreen ? "xs" : "md"}
         fontWeight="bold"
        >
         {tab.name}
        </Typography>
       )}
      </>
     )}
    </NavLink>
   ))}
  </>
 );
};