import { cva } from "class-variance-authority"
import { ITypographyProps, TypographyElements, TypographyFontSizes } from "./types";
import clsx from "clsx";

const colorClasses = {
 // beige
 beige500: "text-beige500",
 beige100: "text-beige100",

 //grey
 grey900: "text-grey900",
 grey500: "text-grey500",
 grey300: "text-grey300",
 grey100: "text-grey100",

 //secondary colors
 green: "text-green",
 yellow: "text-yellow",
 cyan: "text-cyan",
 navy: "text-navy",
 red: "text-red",
 purpleSecondary: "text-purple-secondary",

 // Other colors
 purpleTertiary: "text-purple-tertiary",
 turquoise: "text-turquoise",
 brown: "text-brown",
 magenta: "text-magenta",
 blue: "text-blue",
 navyGrey: "text-navy-grey",
 armyGreen: "text-army-green",
 gold: "text-gold",
 orange: "text-orange",
 white: "text-white",
}

const fontWeightClasses = {
 regular: "font-normal",
 medium: "font-medium",
 bold: "font-bold"
};

const fontSizesClasses = {
 xl: "text-xl",
 lg: "text-lg",
 md: "text-md",
 sm: "text-sm",
 xs: "text-xs"
}

const elementFontSizeMap: Partial<Record<TypographyElements, TypographyFontSizes>> = {
 h1: "xl",
 h2: "lg",
 h3: "md",
 h4: "md",
 h5: "sm",
 h6: "sm",
 p: "sm",
 span: "xs"
};

const textStyles = cva("", {
 variants: {
  color: colorClasses,
  fontWeight: fontWeightClasses,
  fontSize: fontSizesClasses,
 },
 defaultVariants: {
  color: "grey900",
  fontWeight: "regular",
  fontSize: "sm",
 },
 compoundVariants: [],
});


export const Typography  = ({
 as: Element = "p",
 children,
 color,
 fontWeight,
 fontSize: customFontSize,
 customClass,
 disableDefaultStyles = false,
} : ITypographyProps) => {

 const defaultElementSize = elementFontSizeMap[Element as keyof typeof elementFontSizeMap];
 const fontSize = customFontSize || defaultElementSize;

 return ( 
  <Element 
   className={clsx(
    !disableDefaultStyles && textStyles({
     color, 
     fontWeight,
     fontSize
    }),
    customClass
   )}
  >
   {children}
  </Element>
 );
}