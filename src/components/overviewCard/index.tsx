import { cva, VariantProps} from "class-variance-authority";
import clsx from "clsx";
import { Typography } from "../typography";
import { ReactNode } from "react";

const VariantClasses = {
 primary: "bg-grey900 text-white",
 secondary: "bg-beige100 text-green",
 tertiary: "bg-white text-grey900",
};

const overviewCardVariants = cva("", {
 variants: {
  variant: VariantClasses,
 },
});

interface IOverviewCardProps extends VariantProps<typeof overviewCardVariants> {
 customClass?: string;
 icon?: ReactNode;
 title: string;
 content: string;
};

export const OverviewCard = ({variant, customClass, icon, content, title}: IOverviewCardProps) => {
 return ( 
  <article 
   className={clsx(
    overviewCardVariants({variant}),
    "p-300 rounded-150 h-fit flex",
    icon && "gap-200 items-center",
    (icon && customClass) && customClass
   )}
  > 
   {icon && icon}
   <div className="flex flex-col gap-150">
    <Typography
     color={variant === "primary" ? "white" : "grey500"}
    >
     {title}
    </Typography>
    <Typography
     fontSize="xl"
     fontWeight="bold"
     color={variant === "primary" ? "white" : "grey900"}
    >
     {content}
    </Typography>
   </div>
  </article>
 );
}