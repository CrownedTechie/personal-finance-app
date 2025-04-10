// Takes in a date and format and returns a formatted date string
import { format, parseISO } from "date-fns";

export const formattedDate = (date: string | Date, dateFormat: string) => {
 const parsedDate = typeof date === "string" ? parseISO(date) : date;
 return format(parsedDate, dateFormat);
};