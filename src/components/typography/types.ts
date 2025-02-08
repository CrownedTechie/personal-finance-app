import { ReactNode } from "react";

export type TypographyElements = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "pre" | "em" | "strong" | "mark" | "del" | "ins" | "sub" | "sup";

export type TypographyColors = "beige500" | "beige100" | "grey900" | "grey500" | "grey300" | "grey100" | "green" | "yellow" | "cyan" | "navy" | "red" | "purple-secondary" | "purple-tertiary" | "turquoise" | "brown" | "magenta" | "blue" | "navy-grey" | "army-green" | "gold" | "orange";

export type TypographyFontWeight = "regular" | "medium" | "bold";


export interface TypographyProps extends React.HTMLAttributes<HTMLOrSVGElement> {
 as?: TypographyElements;
 children: ReactNode;
 color?: TypographyColors;
 fontWeight?: TypographyFontWeight;
 customClass?: string;
}