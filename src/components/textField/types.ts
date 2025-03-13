import { ReactNode } from "react";
import { TypographyFontWeights } from "../typography/types";
import { IOptionType } from "../selectDropdown/types";

export interface IBaseTextfieldProps {
  id: string;
  name: string;
  labelText?: string;
  helperText?: string;
  fieldType?: "input" | "select";
  customClass?: string;
  labelTextFontWeight?: TypographyFontWeights;
};

export interface IInputFieldProps {
  icon?: ReactNode;
  prefix?: boolean | undefined;
  inputType: "text" | "password" | "email";
  inputPlaceholder: string;
};

export interface ISelectFieldProps {
  selectOptions: IOptionType[];
  selectPlaceholder?: string;
  selectDefaultValue?: IOptionType;
  selectCustomClass?: string;
};