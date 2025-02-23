import { ReactNode } from "react";
import { Typography } from "../typography";
import { TypographyElements, TypographyFontWeights } from "../typography/types";
import clsx from "clsx";

interface IContentHeaderProps {
 buttonGroup?: ReactNode;
 coloredDot?: string;
 as?: TypographyElements;
 fontWeight?: TypographyFontWeights;
 title: string;
 customClass?: string;
};

export const ContentHeader = ({buttonGroup, coloredDot, as, fontWeight, title, customClass}: IContentHeaderProps) => {
 return ( 
  <div className={clsx(
    "py-100",
    customClass && customClass,
    buttonGroup && "border flex items-center justify-between"
   )}
  >
   <div className="flex items-center gap-200">
    {/* May have a dot prefix */}
    {coloredDot && <div className="size-200 rounded-full" style={{backgroundColor: coloredDot}}></div>}
  
    {/* Has title */}
    <Typography
     as={as}
     fontWeight={fontWeight}
    >
     {title}
    </Typography>
   </div>

   {/* May have a button group */}
   { buttonGroup && <div>{buttonGroup}</div> }
  </div>
 );
}