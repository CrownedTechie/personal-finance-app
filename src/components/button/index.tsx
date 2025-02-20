import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import clsx from "clsx";
import { Typography } from "../typography";
import { PiCaretLeftFill, PiCaretRightFill } from "react-icons/pi";

const variantClasses = {
   primary : "text-white bg-grey900 border-transparent hover:bg-grey500 font-bold ",
   secondary: "text-grey900 bg-beige100 border-transparent hover:bg-white hover:border-beige500 font-bold ",
   tertiary: "text-grey500 bg-white border-transparent hover:text-grey900",
   destroy: "text-white bg-red border-transparent hover:bg-red hover:opacity-85 font-bold",
   pagination: "text-grey900 border-beige500 hover:text-white hover:bg-beige500 font-regular"
  }

const buttonVariants = cva("", {
 variants: {
  variant: variantClasses,
 },
});

const variantIcon: Record<string, ReactNode> = {
 tertiary: <PiCaretRightFill className="size-200" />,
 paginationPrev: <PiCaretLeftFill className="size-200" />, 
 paginationNext: <PiCaretRightFill className="size-200" />
};

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
 children: ReactNode,
 paginationDirection?: "prev" | "next";
 customClass?: string;
}


export const Button = ({children, variant, paginationDirection, customClass, ...props}: IButtonProps) => {
 const rightArrow = variant === "tertiary" ? variantIcon[variant] : null;
 const prevArrow = variant === "pagination" && paginationDirection === "prev" ? variantIcon["paginationPrev"] : null;
  const nextArrow = variant === "pagination" && paginationDirection === "next" ? variantIcon["paginationNext"] : null;

 return ( 
  <button 
   className={clsx(
    buttonVariants({ variant }),
    (rightArrow || prevArrow || nextArrow) && "gap-150",
    customClass && customClass,
    "cursor-pointer p-200 border rounded-100 text-sm flex items-center justify-center"
   )}
   {...props}
  >
   {prevArrow && <span>{prevArrow}</span>}
   <Typography customClass="!text-inherit" disableDefaultStyles>
    {children}
   </Typography>
   {(rightArrow || nextArrow) && <span>{rightArrow || nextArrow}</span>}
  </button>
 );
}