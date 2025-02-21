import { NavLink, useSearchParams } from "react-router-dom";
import { Typography } from "../typography";
import { PiArrowsDownUpFill, PiHouseFill, PiChartDonutFill, PiReceiptFill, PiTipJarFill } from "react-icons/pi";
import clsx from "clsx";
import { useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

const tabs = [
 {name: "Overview", location:"", icon: <PiHouseFill />},
 {name: "Transactions", location:"", icon: <PiArrowsDownUpFill />},
 {name: "Budgets", location:"", icon: <PiChartDonutFill />},
 {name: "Pots", location:"", icon: <PiTipJarFill />},
 {name: "Recurring bills", location:"", icon: <PiReceiptFill />},
];

interface ITabsProps {
 isOpen?: boolean;
}

export const Tabs = ({isOpen}: ITabsProps) => {
 const [searchParams, setSearchParams] = useSearchParams();
 const activeTab = searchParams.get("tab") || "Overview";

 const isTabScreen = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
 const isLargeScreen = useMediaQuery("(min-width: 1024px)")

 useEffect(() => {
    const tab = searchParams.get("tab");
    if (!tab) {
      setSearchParams({ tab: "Overview" }, { replace: true });
    }
  }, [searchParams.get("tab"), setSearchParams]);
 
 return (
  <>
   {tabs.map(tab => (
    <NavLink 
     key={tab.name}
     to={`?tab=${tab.name}` || tab.location}
     className={({isActive}) => 
      clsx(
       `flex items-center rounded-tl-150 rounded-tr-150 lg:rounded-tl-none lg:rounded-tr-150 lg:rounded-br-150 lg:gap-200 py-100 px-200 border border-transparent md:px-400 lg:py-200 transition-transform duration-350 ease-out`,
        activeTab !== tab.name && "hover:*:text-beige100 transform hover:scale-105",
        activeTab === tab.name && "bg-beige100 border-b-4 border-b-green lg:border-b-0 lg:border-l-4 lg:border-l-green",
        isTabScreen ? "flex-col" : "flex-row",
      )
     }
    >
     <Typography 
      color={activeTab === tab.name ? "green" : "grey300"}
      fontWeight="bold"
      customClass="text-[1.25rem] md:text-[1.5rem]"
     >
      {tab.icon}
     </Typography>
     {((isOpen && isLargeScreen) || isTabScreen)  && (
      <Typography 
       color={activeTab === tab.name ? "grey900" : "grey300"}
       fontSize={isTabScreen ? "xs" : "md"}
       fontWeight="bold"
      >
       {tab.name}
      </Typography>
     )}
    </NavLink>
   ))}
  </>
 );
};