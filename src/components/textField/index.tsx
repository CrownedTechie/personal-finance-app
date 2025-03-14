import clsx from "clsx";
import { Typography } from "../typography";
import { SelectDropdown } from "../selectDropdown";
import { IBaseTextfieldProps, IInputFieldProps, ISelectFieldProps } from "./types";
import { FieldValues, Path } from "react-hook-form";

type TextfieldProps<TFieldValues extends FieldValues> = 
  IBaseTextfieldProps<TFieldValues> & (
  IInputFieldProps<TFieldValues> | ISelectFieldProps);

export const TextField = <TFieldValues extends FieldValues>({
 id,
 fieldName,
 labelText, 
 helperText, 
 customClass,
 fieldType = "input",
 labelTextFontWeight = "bold",
 ...restProps
}: TextfieldProps<TFieldValues>) => {
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
    <>
      <InputField<TFieldValues> 
        id={id} 
        fieldName={fieldName} 
        {...restProps as IInputFieldProps<TFieldValues>} 
      />
      {helperText && <Typography color="red" customClass="place-self-end">{helperText}</Typography>}
    </>
    ) : (
    <>
      <SelectField {...restProps as ISelectFieldProps} />
      {helperText && <Typography color="grey500" customClass="place-self-end">{helperText}</Typography>}
    </>
    )
   }
  </div>
 );
};

const InputField = <TFieldValues extends FieldValues> ({
  icon, 
  prefix, 
  inputType = "text", 
  fieldName, 
  id, 
  inputPlaceholder,
  register,
  ...restProps
} : IInputFieldProps<TFieldValues> & { fieldName: Path<TFieldValues>, id: string }) => (
  <div className={clsx(
    "border border-beige500 px-200 rounded-100 hover:border-grey500 w-full",
    (icon || prefix) && "flex items-center gap-150"
    )}>
    {prefix && <Typography color="beige500">$</Typography>}
    <input 
      type={inputType} 
      id={id}
      {...(register ? register(fieldName, {required: true}) : { fieldName })}
      placeholder={inputPlaceholder} 
      className=" py-150 font-normal text-sm text-grey900 w-full placeholder:text-sm placeholder-beige500 focus:outline-none truncate " 
      {...restProps}
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