import { cva, VariantProps } from "class-variance-authority";
import { ReactNode } from "react";
import { BiSolidRightArrow } from "react-icons/bi";
import clsx from "clsx";
import { Typography } from "../typography";

const variantClasses = {
   primary : "text-white bg-grey900 hover:bg-grey500 font-bold ",
   secondary: "text-grey900 bg-beige100 hover:bg-white hover:border-beige500 font-bold ",
   tertiary: "text-grey500 bg-white hover:text-grey900",
   destroy: "text-white bg-red hover:bg-red hover:opacity-85 font-bold",
  }

const buttonVariants = cva("", {
 variants: {
  variant: variantClasses,
 },
});

const variantIcon: Record<string, ReactNode> = {
 tertiary: <BiSolidRightArrow className="size-150" />
};

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
 children: ReactNode,
}


export const Button = ({children, variant, ...props}: IButtonProps) => {
 const icon = variant === "tertiary" ? variantIcon[variant] : null;
 return ( 
  <button 
   className={clsx(
    buttonVariants({ variant }),
    icon && "flex items-center gap-150",
    "cursor-pointer p-200 border border-transparent rounded-100 text-sm"
   )}
   {...props}
  >
   <Typography customClass="!text-[inherit]" disableDefaultStyles>
    {" "}
    {children}
   </Typography>
   {icon && <span className="ml-2">{icon}</span>}
  </button>
 );
}