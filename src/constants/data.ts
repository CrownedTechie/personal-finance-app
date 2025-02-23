import { IOptionType } from "@/components/selectDropdown/types";

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
  {title: "Savings", amount: "$159"},
  {title: "Gift", amount: "$40"},
  {title: "Concert Ticket", amount: "$110"},
  {title: "New Laptop", amount: "$10"},
];

export const recurringBills = [
  {title: "Paid Bills", amount: "$190.00"},
  {title: "Total Upcoming", amount: "$194.98"},
  {title: "Due Soon", amount: "$59.98"},
];