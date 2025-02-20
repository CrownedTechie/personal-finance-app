import { NavLink } from "react-router-dom";
import { Typography } from "../typography";
import { PiArrowsDownUpFill, PiHouseFill, PiChartDonutFill, PiReceiptFill } from "react-icons/pi";

const tabs = [
 {name: "Overview", location:"#", icon: <PiHouseFill />},
 {name: "Transactions", location:"#", icon: <PiArrowsDownUpFill />},
 {name: "Budgets", location:"#", icon: <PiChartDonutFill />},
 {name: "Pots", location:"#"},
 {name: "Recurring bills", location:"#", icon: <PiReceiptFill />},
];


export const Tabs = () => {
 return (
  <>
   {tabs.map(tab => (
    <NavLink 
     key={tab.name}
     to={tab.location}
    >
     <Typography color="grey300">
      {tab.name}
     </Typography>
    </NavLink>
   ))}
  </>
 );
};