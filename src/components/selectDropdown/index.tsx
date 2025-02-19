import chroma from "chroma-js";
import Select, { StylesConfig, components } from 'react-select';
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

export interface ColourOption {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const colourOptions: readonly ColourOption[] = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];

const dot = (color = 'transparent') => ({
  alignItems: 'center',
  display: 'flex',

  ':before': {
    backgroundColor: color,
    borderRadius: 16,
    content: '" "',
    display: 'block',
    marginRight: 12,
    height: 16,
    width: 16,
  },
});

const colourStyles: StylesConfig<ColourOption> = {
  control: (styles) => ({ 
   ...styles,
   border: '1px solid hsl(23, 6%, 57%)',
   borderRadius: '.5rem',
   padding: '0rem 1rem',
   fontSize: '.875rem',
   outline: 'none',
   boxShadow: 'none',
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
   const colorData = data as ColourOption;
    const color = chroma(colorData.color);
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? colorData.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled
        ? '#ccc'
        : isSelected
        ? chroma.contrast(color, 'white') > 2
          ? 'white'
          : 'black'
        : colorData.color,
      cursor: isDisabled ? 'not-allowed' : 'default',
      textWrap: "nowrap",
      whiteSpace: "wrap",

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled
          ? isSelected
            ? colorData.color
            : color.alpha(0.3).css()
          : undefined,
      },
    };
  },
  input: (styles) => ({ 
   ...styles, 
   ...dot(),
   padding: '0.75rem 0rem',
   margin: '0rem',
  }),
  placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
  singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),

};

const CustomDropdownIndicator = (props: any) => {
  const { selectProps } = props; 

  return (
    <components.DropdownIndicator {...props}>
      {selectProps.menuIsOpen ? (
        <GoTriangleUp className="size-250 text-grey900" />
      ) : (
        <GoTriangleDown className="size-250 text-grey900" />
      )}
    </components.DropdownIndicator>
  );
};

export const SelectDropdown = ({}) => {
 return ( 
  <Select 
   defaultValue={colourOptions[2]}
   options={colourOptions}
   styles={colourStyles}
   components={{ 
    DropdownIndicator: CustomDropdownIndicator,
    IndicatorSeparator: () => null
   }}
   // unstyled={true}
  />
 );
};