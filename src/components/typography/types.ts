import { ReactNode } from "react";

export type TypographyElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "pre" | "em" | "strong" | "mark" | "del" | "ins" | "sub" | "sup";

type TypographyColors = "beige500" | "beige100" | "grey900" | "grey500" | "grey300" | "grey100" | "green" | "yellow" | "cyan" | "navy" | "red" | "purpleSecondary" | "purpleTertiary" | "turquoise" | "brown" | "magenta" | "blue" | "navyGrey" | "armyGreen" | "gold" | "orange";

type TypographyFontWeights = "regular" | "medium" | "bold";

export type TypographyFontSizes = "xl" | "lg" | "md" | "sm" | "xs";


export interface ITypographyProps extends React.HTMLAttributes<HTMLOrSVGElement> {
 as?: TypographyElements;
 children: ReactNode;
 color?: TypographyColors;
 fontWeight?: TypographyFontWeights;
 fontSize?: TypographyFontSizes;
 customClass?: string;
}