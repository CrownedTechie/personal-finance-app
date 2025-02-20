import { NavLink, useSearchParams } from "react-router-dom";
import { Typography } from "../typography";
import { PiArrowsDownUpFill, PiHouseFill, PiChartDonutFill, PiReceiptFill, PiTipJarFill } from "react-icons/pi";
import clsx from "clsx";
import { useEffect } from "react";

const tabs = [
 {name: "Overview", location:"", icon: <PiHouseFill />},
 {name: "Transactions", location:"", icon: <PiArrowsDownUpFill />},
 {name: "Budgets", location:"", icon: <PiChartDonutFill />},
 {name: "Pots", location:"", icon: <PiTipJarFill />},
 {name: "Recurring bills", location:"", icon: <PiReceiptFill />},
];


export const Tabs = () => {
 const [searchParams, setSearchParams] = useSearchParams();
 const activeTab = searchParams.get("tab") || "Overview";

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
       `flex items-center rounded-tr-150 rounded-br-150 gap-200 px-400 py-200 transition-all duration-300 ease-in-out`,
        activeTab !== tab.name && "hover:*:text-beige100 hover:scale-105",
        activeTab === tab.name && "bg-beige100 border-l-4 border-l-green"
      )
     }
    >
     <Typography 
      color={activeTab === tab.name ? "green" : "grey300"}
      fontWeight="bold"
      customClass="text-[1.5rem]"
     >
      {tab.icon}
     </Typography>
     <Typography 
      color={activeTab === tab.name ? "grey900" : "grey300"}
      fontSize="md"
      fontWeight="bold"
     >
      {tab.name}
     </Typography>
    </NavLink>
   ))}
  </>
 );
};