import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import clsx from "clsx";
import { PiCaretLeftFill, PiCaretRightFill } from "react-icons/pi";
import { Typography } from "../typography";

const variantClasses = {
   primary : "text-white bg-grey900 border-transparent hover:bg-grey500 font-bold p-200 ",
   secondary: "text-grey900 bg-beige100 border-transparent hover:bg-white hover:border-beige500 font-bold p-200 ",
   tertiary: "text-grey500 bg-transparent border-transparent hover:text-grey900",
   destroy: "text-white bg-red border-transparent hover:bg-red hover:opacity-85 font-bold p-200",
   pagination: "text-grey900 border-beige500 hover:text-white hover:bg-beige500 font-regular px-200 py-150"
};

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
 rightArrowIcon?: boolean;
 paginationDirection?: "prev" | "next";
 customClass?: string;
};

export const Button = ({children, variant, rightArrowIcon = true, paginationDirection, customClass, onClick, disabled, ...props }: IButtonProps) => {
   const rightArrow = variant === "tertiary" && rightArrowIcon ? variantIcon[variant] : null;
   const prevArrow = variant === "pagination" && paginationDirection === "prev" ? variantIcon["paginationPrev"] : null;
   const nextArrow = variant === "pagination" && paginationDirection === "next" ? variantIcon["paginationNext"] : null;

 return ( 
  <button 
   className={clsx(
    buttonVariants({ variant }),
    (rightArrow || prevArrow || nextArrow) && "gap-150",
    customClass && customClass,
    "border rounded-100 text-sm flex items-center justify-center cursor-pointer"
   )}
   onClick={onClick}
   disabled={disabled}
   {...props}
  >
   {prevArrow && <span>{prevArrow}</span>}
   {children && (
      <Typography customClass="!text-inherit cursor-pointer" disableDefaultStyles>
      {children}
      </Typography>
   )}
   {(rightArrow || nextArrow) && <span>{rightArrow || nextArrow}</span>}
  </button>
 );
};