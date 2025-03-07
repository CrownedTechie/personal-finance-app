import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { ContentHeader } from "../contentHeader";
import { Button } from "../button";
import { Typography } from "../typography";
import { Quote } from "./Quote";
import { CardWrapper } from "./CardWrapper";
import { ListView } from "../listView";

interface IBudgetscardProps {
 title: string;
 coloredDot: string;
}

export const BudgetsCard = ({title, coloredDot}: IBudgetscardProps) => {
 return ( 
  <CardWrapper>
   <div className="flex flex-col justify-center gap-250">
    <ContentHeader
     as="h2"
     fontWeight="bold"
     title={title}
     coloredDot={coloredDot}
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
     Maximum of $50.00
    </Typography>

    {/* Progress bar */}
    <div className="border border-transparent rounded-50 bg-beige100 flex items-center p-50">
     <div className="bg-green h-300 rounded-50 w-[30%]"></div>
    </div>

    {/* Quote */}
    <div className="flex items-center">
     <Quote
      title="spent" 
      amount="$15.00"
     />
     <Quote
      title="remaining" 
      amount="$35.00"
      primaryBorderColor="var(--color-grey100)"
     />
    </div>

    {/* Spending overview */}
    <div className="bg-beige100 rounded-150 p-250 flex flex-col justify-center">
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
    </div>
    
   </div>
  </CardWrapper>
 );
}