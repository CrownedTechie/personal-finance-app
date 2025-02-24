import { IOptionType } from "@/components/selectDropdown/types";
import EmmaPic from "@/assets/avatars/emma-richardson.jpg";
import SavoryBites from "@/assets/avatars/savory-bites-bistro.jpg";
import DanielCarter from "@/assets/avatars/daniel-carter.jpg";
import SunPark from "@/assets/avatars/sun-park.jpg";
import UrbanServices from "@/assets/avatars/urban-services-hub.jpg";

export const fruitOptions: IOptionType[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

export const colorOptions: IOptionType[] = [
  { value: 'green', label: 'Green', color: 'var(--color-green)' },
  { value: 'yellow', label: 'Yellow', color: 'var(--color-yellow)', isDisabled: true },
  { value: 'cyan', label: 'Cyan', color: 'var(--color-cyan)' },
  { value: 'navy', label: 'Navy', color: 'var(--color-navy)' },
  { value: 'red', label: 'Red', color: 'var(--color-red)'},
  { value: 'purple', label: 'Purple', color: 'var(--color-purple-secondary)' }, 
  { value: 'orchid', label: 'Orchid', color: 'var(--color-purple-tertiary)' }, 
  { value: 'turquoise', label: 'Turquoise', color: 'var(--color-turquoise)' },
  { value: 'brown', label: 'Brown', color: 'var(--color-brown)' },
  { value: 'magenta', label: 'Magenta', color: 'var(--color-magenta)' },
  { value: 'blue', label: 'Blue', color: 'var(--color-blue)' },
  { value: 'navy-grey', label: 'Navy Grey', color: 'var(--color-navy-grey)' },
  { value: 'army-green', label: 'Army Green', color: 'var(--color-army-green)' },
  { value: 'gold', label: 'Gold', color: 'var(--color-gold)' },
  { value: 'orange', label: 'Orange', color: 'var(--color-orange)' },
];

export const borderColors: string[] = [
  'var(--color-green)',
  'var(--color-yellow)',
  'var(--color-cyan)',
  'var(--color-navy)',
  'var(--color-red)',
  'var(--color-purple-secondary)',
  'var(--color-purple-tertiary)',
  'var(--color-turquoise)',
  'var(--color-brown)',
  'var(--color-magenta)',
  'var(--color-blue)',
  'var(--color-navy-grey)',
  'var(--color-army-green)',
  'var(--color-gold)',
  'var(--color-orange)',
];

export const savingsOptions = [
  {title: "savings", amount: "$159"},
  {title: "gift", amount: "$40"},
  {title: "concert ticket", amount: "$110"},
  {title: "new laptop", amount: "$10"},
];

export const recurringBills = [
  {title: "paid bills", amount: "$190.00"},
  {title: "total upcoming", amount: "$194.98"},
  {title: "due soon", amount: "$59.98"},
];

export const transactions = [
  {profilePicture: EmmaPic, name: "emma richardson", amount: "+$75.50", date: "19 aug 2024"},
  {profilePicture: SavoryBites, name: "savory bites bistro", amount: "-$55.50", date: "19 aug 2024"},
  {profilePicture: DanielCarter, name: "daniel carter", amount: "-$42.30", date: "18 aug 2024"},
  {profilePicture: SunPark, name: "sun park", amount: "+$120.00", date: "17 aug 2024"},
  {profilePicture: UrbanServices, name: "urban services hub", amount: "-$65.00", date: "17 aug 2024"},
];