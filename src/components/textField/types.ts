import { InputHTMLAttributes, ReactNode } from "react";
import { TypographyFontWeights } from "../typography/types";
import { IOptionType } from "../selectDropdown/types";
import { FieldValues, UseFormRegister, Path } from "react-hook-form";

export interface IBaseTextfieldProps<TFieldValues extends FieldValues> {
  id: string;
  fieldName: Path<TFieldValues>;
  labelText?: string;
  helperText?: string;
  fieldType?: "input" | "select";
  customClass?: string;
  labelTextFontWeight?: TypographyFontWeights;
};

export interface IInputFieldProps<TFieldValues extends FieldValues> 
 extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  icon?: ReactNode;
  prefix?: boolean | undefined;
  inputType?: "text" | "password" | "email";
  inputPlaceholder: string;
  register?: UseFormRegister<TFieldValues>;
};

export interface ISelectFieldProps {
  selectOptions: IOptionType[];
  selectPlaceholder?: string;
  selectDefaultValue?: IOptionType;
  selectCustomClass?: string;
};