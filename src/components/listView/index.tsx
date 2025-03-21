import clsx from "clsx";
import { Typography } from "../typography";

export interface IListViewProps {
 profilePicture: string;
 name: string;
 amount: string;
 date: string;
 customClass?: string;
};

export const ListView = ({profilePicture, name, amount, date, customClass="border-b-grey100 py-200"}: IListViewProps) => {

 return ( 
  <li className={clsx(
   "flex items-center justify-between border-b capitalize",
   customClass
   )}
  >
   <div className="flex items-center gap-200 min-w-0">
    <img src={profilePicture} alt={name} className="rounded-full size-400 md:size-500 flex-shrink-0" />
    <Typography 
     fontWeight="bold" 
     customClass="truncate"
    >
     {name}
    </Typography>
   </div>

   <div className="flex flex-col items-end gap-100 min-w-fit">
    <Typography
     color={amount.includes("+") ? "green" : "grey900"}
     fontWeight="bold"
    >
     {amount}
    </Typography>
    <Typography
     as="span"
     color="grey500"
    >
     {date}
    </Typography>
   </div>
  </li>
 );
};
