import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { Button } from "../button";
import { ContentHeader } from "../contentHeader";
import { CardWrapper } from "./CardWrapper";
import { Typography } from "../typography";
import { formattedAmount } from "@/utils/formatAmount";

interface IPotsCardProps {
 title: string;
 itemColor: string;
 totalSaved: number;
 targetAmount: number;
};

export const PotsCard = ({title, itemColor, totalSaved, targetAmount}: IPotsCardProps) => {
 const formattedTotalSaved = formattedAmount(totalSaved);
 const formattedTargetAmount = formattedAmount(targetAmount);
 const progressPercentage = ((totalSaved / targetAmount) * 100);

 return ( 
  <CardWrapper>
   <div className="flex flex-col justify-center gap-400">
    <ContentHeader
      as="h2"
      fontWeight="bold"
      title={title}
      coloredDot={itemColor}
      buttonGroup={
       <Button 
        className="outline-none text-grey300 cursor-pointer"
       >
        <PiDotsThreeOutlineFill className="size-200" />
       </Button>
      } 
     /> 
     {/* Pots chart and bar */}
     <div className="flex flex-col gap-200 capitalize">
      <div className="flex items-center justify-between">
       <Typography 
        color="grey500"
       >
        total saved
       </Typography>
       <Typography 
        fontWeight="bold" 
        customClass="text-xl"
       >
        {formattedTotalSaved}
       </Typography>
      </div>
      {/* Progress bar */}
      <div className="border border-transparent rounded-50 bg-beige100">
       <div className=" rounded-50 h-100" 
        style={{
         background: itemColor, 
         width: `${progressPercentage}%`
        }}
       >
       </div>
      </div>
      {/* Progress bar info */}
      <div className="flex items-center justify-between">
       <Typography
        as="span"
        color="grey500"
        fontWeight="bold"
       >
        {progressPercentage.toFixed(1)}%
       </Typography>
       <Typography
        as="span"
        color="grey500"
       >
        target of {formattedTargetAmount}
       </Typography>
      </div>
     </div>

     {/* Button groups */}
     <div className="grid grid-cols-2 gap-200">
      <Button variant="secondary">+ Add Money</Button>
      <Button variant="secondary">Withdraw</Button>
     </div>

   </div>
  </CardWrapper>
 );
}