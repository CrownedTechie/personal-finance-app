import { recurringBills } from "@/constants/data";
import { Button } from "../button";
import { ContentHeader } from "../contentHeader";
import { CardWrapper } from "./CardWrapper";
import { Quote } from "./Quote";
import clsx from "clsx";

interface IOverviewCardProps {
 cardTitle: string;
 buttonTitle?: string;
 customClass?: string;
}

export const OverviewCard = ({ cardTitle, buttonTitle, customClass }: IOverviewCardProps) => {
 return ( 
  <CardWrapper>
   <div className={clsx(
     "flex flex-col justify-center",
     customClass && customClass
    )}
   >
    <ContentHeader 
     title={cardTitle}
     as="h2"
     fontWeight="bold"
     buttonGroup={<Button variant="tertiary">{buttonTitle}</Button>}
    />

    {/* stylings for recurring bills overview */}
    {/* <div className="flex flex-col items-center gap-150">
     {recurringBills.map(item => (
      <Quote
        variant="secondary" 
        title={item.title}
        amount={item.amount}
      />
     ))}
    </div> */}
   </div>
  </CardWrapper>
 );
}