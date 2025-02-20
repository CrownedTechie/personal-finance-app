import { Typography } from "../typography";
import { ReactNode } from "react";
import clsx from "clsx";
import { SelectDropdown } from "../selectDropdown";
import { IOptionType } from "../selectDropdown/types";

interface ITextfieldProps {
 icon?: ReactNode;
 prefix?: boolean;
 labelText?: string;
 helperText?: string;
 fieldType?: "input" | "select";
 inputType?: "text" | "password";
 selectOptions?: IOptionType[];
 selectPlaceholder?: string;
 selectDefaultValue?: IOptionType;
}

export const TextField = ({
 icon, 
 labelText, 
 helperText, 
 prefix, 
 fieldType = "input",
 inputType = "text",
 selectDefaultValue,
 selectPlaceholder,
 selectOptions = [
   { label: "Un-appraised", value: "Un-appraised" },
   { label: "In-progress", value: "In-progress" },
   { label: "completed", value: "completed" },
 ]
}: ITextfieldProps) => {
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

   {fieldType === "input" ? (
     <div className={clsx(
      "border border-beige500 px-200 rounded-100 hover:border-grey500",
      (icon || prefix) && "flex items-center gap-150"
     )}>
      {prefix && <Typography color="beige500">$</Typography>}
      <input 
       type={inputType} 
       name="" 
       placeholder="Placeholder" 
       className=" py-150 font-normal text-sm text-grey900 w-full placeholder:text-sm placeholder-beige500 focus:outline-none " 
      />
      {icon && icon}
     </div>
    ) : (
     <SelectDropdown 
      options={selectOptions}
      placeholder={selectPlaceholder}
      defaultValue={selectDefaultValue}
     />
    )
   }
   
   <Typography color="grey500" customClass="place-self-end">{helperText}</Typography>
  </div>
 );
}