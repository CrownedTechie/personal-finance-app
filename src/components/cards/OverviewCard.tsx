import { Button } from "../button";
import { ContentHeader } from "../contentHeader";
import { CardWrapper } from "./CardWrapper";
import clsx from "clsx";
import { ReactNode } from "react";

interface IOverviewCardProps {
 cardTitle: string;
 buttonTitle?: string;
 customClass?: string;
 children: ReactNode;
};

export const OverviewCard = ({ cardTitle, buttonTitle, customClass, children }: IOverviewCardProps) => {
 return ( 
  <CardWrapper>
   <div className={clsx(
     "flex flex-col justify-center capitalize",
     customClass && customClass
    )}
   >
    <ContentHeader 
     title={cardTitle}
     as="h2"
     fontWeight="bold"
     buttonGroup={
      <Button 
        variant="tertiary"
        customClass="capitalize cursor-pointer"
      >
        {buttonTitle}
      </Button>
    }
    />
    {children}
   </div>
  </CardWrapper>
 );
};