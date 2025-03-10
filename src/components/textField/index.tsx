import { ReactNode } from "react";
import clsx from "clsx";
import { IOptionType } from "../selectDropdown/types";
import { Typography } from "../typography";
import { SelectDropdown } from "../selectDropdown";
import { TypographyFontWeights } from "../typography/types";

interface ITextfieldProps {
 icon?: ReactNode;
 prefix?: boolean;
 labelText?: string;
 helperText?: string;
 fieldType?: "input" | "select";
 inputType?: "text" | "password" | "email";
 inputPlaceholder?: string;
 selectOptions?: IOptionType[];
 selectPlaceholder?: string;
 selectDefaultValue?: IOptionType;
 selectCustomClass?: string;
 customClass?: string;
 labelTextFontWeight?: TypographyFontWeights;
}

export const TextField = ({
 icon, 
 labelText, 
 helperText, 
 prefix, 
 customClass,
 fieldType = "input",
 inputType = "text",
 inputPlaceholder = "Placeholder",
 labelTextFontWeight = "bold",
 selectCustomClass,
 selectDefaultValue,
 selectPlaceholder,
 selectOptions = [
   { label: "Un-appraised", value: "Un-appraised" },
   { label: "In-progress", value: "In-progress" },
   { label: "completed", value: "completed" },
 ]
}: ITextfieldProps) => {
 return ( 
  <div 
    className={clsx(
      "flex",
      customClass ? customClass : "flex-col gap-50"
  )}
  >
   <label htmlFor="">
    <Typography
      as="span"
      color="grey500"
      fontWeight={labelTextFontWeight}
      customClass="capitalize"
    >
     {labelText}
    </Typography>
   </label>

   {fieldType === "input" ? (
     <div className={clsx(
      "border border-beige500 px-200 rounded-100 hover:border-grey500 w-full",
      (icon || prefix) && "flex items-center gap-150"
     )}>
      {prefix && <Typography color="beige500">$</Typography>}
      <input 
       type={inputType} 
       name="" 
       placeholder={inputPlaceholder} 
       className=" py-150 font-normal text-sm text-grey900 w-full placeholder:text-sm placeholder-beige500 focus:outline-none truncate " 
      />
      {icon && icon}
     </div>
    ) : (
     <SelectDropdown 
      options={selectOptions}
      placeholder={selectPlaceholder}
      defaultValue={selectDefaultValue}
      customClass={selectCustomClass}
     />
    )
   }
   
   {helperText && <Typography color="grey500" customClass="place-self-end">{helperText}</Typography>}
  </div>
 );
}