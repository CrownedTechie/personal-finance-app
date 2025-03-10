import clsx from "clsx";
import { Typography } from "../typography";
import { formattedAmount } from "@/utils/formatAmount";

interface IBillsSummaryListProps {
 title: string;
 totalAmount: number;
 noOfTransactions: string;
}

export const BillsSummaryList = ({title, totalAmount, noOfTransactions}: IBillsSummaryListProps) => {
 const formattedTotalAmount = formattedAmount(totalAmount);
 const isDueSoon = title === "due soon";

 return ( 
  <li 
   className={clsx(
    "flex items-center justify-between capitalize",
   )}
  >
   <Typography
    as="span"
    color={isDueSoon ? "red" : "grey500"}
   >
    {title}
   </Typography>
   <Typography
    as="span"
    color={isDueSoon ? "red" : "grey900"}
    fontWeight="bold"
   >
    {noOfTransactions} {`(${formattedTotalAmount})`}
   </Typography>
  </li>
 );
};