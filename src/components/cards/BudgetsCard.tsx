import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { ContentHeader } from "../contentHeader";
import { Button } from "../button";
import { Typography } from "../typography";
import { Quote } from "./Quote";
import { CardWrapper } from "./CardWrapper";
import { ListView } from "../listView";
import { formattedAmount } from "@/utils/formatAmount";
import React from "react";

interface ILatestSpendingsProps {
 profilePicture: string;
 name: string;
 amount: number;
 date: string;
};

interface IBudgetscardProps {
 title: string;
 itemColor: string;
 amountSpent: number;
 totalBudget: number
 latestSpendings: ILatestSpendingsProps[];
};

export const BudgetsCard = ({title, itemColor, amountSpent, totalBudget, latestSpendings}: IBudgetscardProps) => {
  const maxBudget = formattedAmount(totalBudget);
  const totalSpent = formattedAmount(amountSpent);
  const progressBar = (amountSpent/totalBudget) * 100;
 return ( 
  <CardWrapper>
   <div className="flex flex-col justify-center gap-250">
    <ContentHeader
     as="h2"
     fontWeight="bold"
     title={title}
     coloredDot={itemColor}
     buttonGroup={
      <Button 
       className="outline-none text-grey300"
      >
       <PiDotsThreeOutlineFill className="size-200" />
      </Button>
     } 
    /> 

    <Typography
     color="grey500"
    >
     Maximum of {maxBudget}
    </Typography>

    {/* Progress bar */}
    <div className="border border-transparent rounded-50 bg-beige100 flex items-center p-50">
     <div 
      className="h-300 rounded-50"
      style={{
        backgroundColor: itemColor, 
        width: `${progressBar}%`
      }}
     ></div>
    </div>

    {/* Quote */}
    <div className="flex items-center">
     <Quote
      title="spent" 
      amount={totalSpent}
      primaryBorderColor={itemColor}
     />
     <Quote
      title="remaining" 
      amount={maxBudget}
      primaryBorderColor="var(--color-grey100)"
     />
    </div>

    {/* Spending overview */}
    <div className="bg-beige100 rounded-150 p-250 flex flex-col justify-center gap-250">
     <ContentHeader 
     title="latest spending"
     as="h2"
     fontWeight="bold"
     buttonGroup={
      <Button 
       variant="tertiary"
       customClass="capitalize cursor-pointer"
      >
       see all
      </Button>
      }
      />
      <ul>
       {latestSpendings.map((item, index)=> (
        <React.Fragment
         key={item.name}
        >
         <ListView 
          profilePicture={item.profilePicture}
          name={item.name}
          amount={formattedAmount(item.amount)}
          date={item.date}
          customClass="border-b-0 py-150"
         />
         {index !== latestSpendings.length - 1 && <hr className="text-grey500 opacity-15"/> }
        </React.Fragment>
       ))}
      </ul>
    </div>
    
   </div>
  </CardWrapper>
 );
}