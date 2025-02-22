import chroma from "chroma-js";
import Select, { StylesConfig, components } from 'react-select';
import { PiCaretDownFill, PiCaretUpFill, PiCheckCircleFill } from "react-icons/pi";
import clsx from "clsx";
import { IOptionType } from "./types";
import { Typography } from "../typography";

export interface ISelectDropdownProps {
 options: IOptionType[];
 placeholder?: string;
 defaultValue?: IOptionType;
}

const dot = (color?: string) => ({
  alignItems: 'center',
  display: 'flex',
  ':before': color 
   ? {
    backgroundColor: color,
    borderRadius: 16,
    content: '" "',
    display: 'block',
    marginRight: 12,
    height: 16,
    width: 16,
   } : {},
});

const selectStyles: StylesConfig<IOptionType> = {
  control: (styles) => ({ 
   ...styles,
   border: '1px solid var(--color-beige500)',
   borderRadius: '.5rem',
   backgroundColor: 'transparent',
   padding: '0rem .25rem',
   fontSize: '.875rem',
   outline: 'none',
   boxShadow: 'none',
   ":hover": {
    border: '1px solid var(--color-grey500)',
   }
  }),
  // option: (styles, { data, isDisabled, isFocused, isSelected }) => {
  //  const colorData = data as ColourOption;
  //   const color = chroma(colorData.color);
  //   return {
  //     ...styles,
  //     backgroundColor: isDisabled
  //       ? undefined
  //       : isSelected
  //       ? colorData.color
  //       : isFocused
  //       ? color.alpha(0.1).css()
  //       : undefined,
  //     color: isDisabled
  //       ? '#ccc'
  //       : isSelected
  //       ? chroma.contrast(color, 'white') > 2
  //         ? 'white'
  //         : 'black'
  //       : colorData.color,
  //     cursor: isDisabled ? 'not-allowed' : 'default',
  //     textWrap: "nowrap",
  //     whiteSpace: "wrap",

  //     // ':active': {
  //     //   ...styles[':active'],
  //     //   backgroundColor: !isDisabled
  //     //     ? isSelected
  //     //       ? colorData.color
  //     //       : color.alpha(0.3).css()
  //     //     : undefined,
  //     // },
  //   };
  // },
  input: (styles) => ({ 
   ...styles, 
   ...dot(),
   padding: '0.75rem 0rem',
   margin: '0rem',
  }),
  placeholder: (styles) => ({ ...styles,  ...dot()}),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
};

const CustomDropdownIndicator = (props: any) => {
  const { selectProps } = props; 

  return (
    <components.DropdownIndicator {...props}>
      {selectProps.menuIsOpen ? (
        <PiCaretUpFill className="size-200 text-grey900" />
      ) : (
        <PiCaretDownFill className="size-200 text-grey900" />
      )}
    </components.DropdownIndicator>
  );
};

const CustomOption = (props: any) => {
  const { data, isSelected, isDisabled, innerRef, innerProps } = props;
  
  return (
    <div 
      ref={innerRef} 
      {...innerProps} 
      className={clsx(
       "flex items-center border-b border-b-grey100 justify-between mx-200 py-150 cursor-pointer",
      )}
    >
      {/* Colored Dot + Label */}
      <div className={clsx(
        "flex items-center gap-150 text-nowrap",
       )}
      >
        {data.color && (
         <span
          className={clsx(
           "size-200 rounded-full",
           isDisabled && "opacity-10"
          )}
           style={{
             backgroundColor: data.color,
           }}
         />
        )}
        <Typography 
         color={isDisabled && "grey500"}
        >
         {data.label}
        </Typography>
      </div>

      {isSelected && <PiCheckCircleFill className="text-green size-200" />}
      {isDisabled && <Typography as="span" color="grey500" >Already used</Typography>}
    </div>
  );
};



export const SelectDropdown = ({
 // options = [
 //   { label: "Un-appraised", value: "Un-appraised" },
 //   { label: "In-progress", value: "In-progress" },
 //   { label: "completed", value: "completed" },
 // ], 
 options,
 placeholder = "Select a value", 
 defaultValue
}: ISelectDropdownProps) => {
 return ( 
  <Select 
   defaultValue={defaultValue}
   options={options}
   styles={selectStyles}
   placeholder={placeholder}
   components={{ 
    DropdownIndicator: CustomDropdownIndicator,
    IndicatorSeparator: () => null,
    Option: CustomOption,
   }}
  />
 );
};