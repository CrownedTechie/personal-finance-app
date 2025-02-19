import { Typography } from "../typography";
import { ReactNode } from "react";
import clsx from "clsx";

interface ITextfieldProps {
 icon?: ReactNode;
 prefix?: ReactNode;
 labelText?: string;
 helperText?: string;
}


export const TextField = ({icon, labelText, helperText, prefix}: ITextfieldProps) => {
 return ( 
  <div className="flex flex-col gap-50 w-[20%]">
   <label htmlFor="">
    <Typography
     color="grey500"
     fontWeight="bold"
    >
     {labelText}
    </Typography>
   </label>

   <div className={clsx(
    "border border-beige500 px-200 rounded-100",
    (icon || prefix) && "flex items-center gap-150"
   )}>
    {prefix && prefix}
    <input 
     type="text" 
     name="" 
     placeholder="Placeholder" 
     className=" py-150 font-normal text-sm text-grey900 w-full placeholder:text-sm placeholder-beige500 focus:outline-none " 
    />
    {icon && icon}
   </div>
   <Typography color="grey500" customClass="place-self-end">{helperText}</Typography>
  </div>
 );
}