import clsx from "clsx";
import { Typography } from "../typography";
import { SelectDropdown } from "../selectDropdown";
import { IBaseTextfieldProps, IInputFieldProps, ISelectFieldProps } from "./types";

type TextfieldProps = IBaseTextfieldProps & (IInputFieldProps | ISelectFieldProps);

export const TextField = ({
 id,
 name,
 labelText, 
 helperText, 
 customClass,
 fieldType = "input",
 labelTextFontWeight = "bold",
 ...restProps
}: TextfieldProps) => {
 return ( 
  <div 
    className={clsx(
      "flex",
      customClass ? customClass : "flex-col gap-50"
  )}
  >
   <label htmlFor={id}>
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
     <InputField id={id} name={name}  {...restProps as IInputFieldProps} />
    ) : (
     <SelectField {...restProps as ISelectFieldProps} />
    )
   }
   
   {helperText && <Typography color="grey500" customClass="place-self-end">{helperText}</Typography>}
  </div>
 );
};

const InputField = ({
  icon, 
  prefix, 
  inputType = "text", 
  name, 
  id, 
  inputPlaceholder
} : IInputFieldProps & Pick<IBaseTextfieldProps, "name" | "id">) => (
  <div className={clsx(
    "border border-beige500 px-200 rounded-100 hover:border-grey500 w-full",
    (icon || prefix) && "flex items-center gap-150"
    )}>
    {prefix && <Typography color="beige500">$</Typography>}
    <input 
      type={inputType} 
      id={id}
      name={name}
      placeholder={inputPlaceholder} 
      className=" py-150 font-normal text-sm text-grey900 w-full placeholder:text-sm placeholder-beige500 focus:outline-none truncate " 
    />
    {icon && icon}
  </div>
);

const SelectField = ({
  selectPlaceholder, 
  selectDefaultValue, 
  selectCustomClass,
  selectOptions = [
   { label: "Un-appraised", value: "Un-appraised" },
   { label: "In-progress", value: "In-progress" },
   { label: "completed", value: "completed" },
 ]
} : ISelectFieldProps) => (
  <SelectDropdown 
    options={selectOptions}
    placeholder={selectPlaceholder}
    defaultValue={selectDefaultValue}
    customClass={selectCustomClass}
  />
);