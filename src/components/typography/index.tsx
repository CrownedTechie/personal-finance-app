import { cva } from "class-variance-authority"
import { TypographyProps } from "./types";
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
}

const fontWeightClasses = {
 regular: "font-normal",
 medium: "font-medium",
 bold: "font-bold"
};

const textStyles = cva("", {
 variants: {
  color: colorClasses,
  fontWeight: fontWeightClasses,
 },
 defaultVariants: {
  color: "grey900",
  fontWeight: "regular",
 },
 compoundVariants: [],
});


export const Typography  = ({
 as: Element = "p",
 children,
 color,
 fontWeight,
 customClass
} : TypographyProps) => {
 
 return ( 
  <Element 
   className={textStyles({
     color, 
     fontWeight,
     className: clsx(customClass && customClass)
   })}
  >
   {children}
  </Element>
 );
}