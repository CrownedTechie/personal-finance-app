import { cva, VariantProps } from "class-variance-authority";
import { Typography } from "../typography";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { borderColors } from "@/constants/data";

const VariantClasses = {
 primary: "bg-transparent",
 secondary: "bg-beige100"
};

const variantClasses = cva("", {
 variants:{
  variant: VariantClasses,
 },
});

interface IQuoteProps extends VariantProps<typeof variantClasses> {
 title: string;
 amount: string;
};

export const Quote = ({variant, title, amount}: IQuoteProps) => {
 const [borderColor, setBorderColor] = useState<string>("");

 useEffect(() => {
  const randomBorderColor = borderColors[Math.floor(Math.random() * borderColors.length)];
  setBorderColor(randomBorderColor);
 }, []);

 const isSecondary = variant === "secondary";

 return ( 
  <article
   className={clsx(
    variantClasses({ variant }),
    "relative w-full",
    isSecondary 
     ? `bg-beige100 border-l-4 rounded-100 px-200 py-250 clip-path-[polygon(0%_0%,100%_0%,95%_50%,100%_100%,0%_100%)]` 
     : "bg-transparent rounded-l-50 flex items-center ",
   )}
   style={ isSecondary ? { borderColor } : {} }
  >
   {!isSecondary && 
    <div 
     className={`absolute left-0 top-0 h-full w-50 rounded-100`}
     style={{ background: borderColor }}
    ></div>
   }
   <div className={clsx(
    isSecondary 
     ? "flex flex-row items-center justify-between" 
     : "flex flex-col ml-50 gap-50 rounded-r-100 px-200",
    )}
   >
    <Typography
     as="span"
     color="grey500"
    >
     {title}
    </Typography>
    <Typography
    fontWeight="bold"
    >
     {amount}
    </Typography>
   </div>
  </article>
 );
}