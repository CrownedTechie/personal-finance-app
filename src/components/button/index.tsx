import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import { Typography } from "../typography";
import clsx from "clsx";

const variantClasses = {
   primary : "text-white bg-grey900 hover:bg-grey500",
   secondary: "bg-beige100 text-grey900 hover:bg-white hover:border-beige500 ",
   tertiary: "bg-white text-grey500 hover:text-grey900",
   destroy: "bg-red text-white hover:bg-red ",
  }

const buttonVariants = cva("", {
 variants: {
  variant: variantClasses,
 },
});

const variantIcon: Record<string, ReactNode> = {
 tertiary: <BiSolidRightArrow />
};

interface IButtonProps extends VariantProps<typeof buttonVariants> {
 children: ReactNode,
}


export const Button = ({children, variant}: IButtonProps) => {
 const icon = variant === "tertiary" ? variantIcon[variant] : null;
 return ( 
  <button 
   className={clsx(
    buttonVariants({variant}),
    icon && "flex items-center",
    "cursor-pointer p-100 border border-transparent rounded-[8px]"
   )}
  >
   {children}
   {icon && <span className="ml-2">{icon}</span>}
  </button>
 );
}