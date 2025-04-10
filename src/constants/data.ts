import { IOptionType } from "@/components/selectDropdown/types";
import { AlphaAnalytics, AquaFlowUtilities, BravoZenSpa, ByteWise, CharlieElectricCompany, DanielCarter, DeltaTaxi, EchoGameStore, Ecofuel, EllaPhillips, EmmaPic, EthanClark, JamesThompson, LiamHughes, LilyRamirez, NimbusDataStorage, PixelPlayground, RinaSato, SavoryBites, SunPark, UrbanServices, williamHarris } from "@/assets/avatars";
import { RecurringBillsTransactions, Transactions } from "@/pages";

//! Delete:: check this to know what to delete

export const fruitOptions: IOptionType[] = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
];

export const filterOptions: IOptionType[] = [
  { value: "latest", label: "Latest" },
  { value: "oldest", label: "Oldest" },
  { value: "A to Z", label: "A to Z" },
  { value: "Z to A", label: "Z to A" },
  { value: "highest", label: "Highest" },
  { value: "lowest", label: "Lowest" },
];

export const categoryOptions: IOptionType[] = [
  { value: "all transactions", label: "All transactions" },
  { value: "entertainment", label: "Entertainment" },
  { value: "bills", label: "Bills" },
  { value: "groceries", label: "Groceries" },
  { value: "dining out", label: "Dining Out" },
  { value: "transportation", label: "Transportation" },
  { value: "personal care", label: "Personal Care" },
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

// //TODO: delete recurring bills 
// export const recurringBills = [
//   {title: "paid bills", amount: "$190.00"},
//   {title: "total upcoming", amount: "$194.98"},
//   {title: "due soon", amount: "$59.98"},
// ];

// TODO: remove transactions
export const transactions = [
  {profilePicture: EmmaPic, name: "emma richardson", amount: "+$75.50", date: "19 aug 2024"},
  {profilePicture: SavoryBites, name: "savory bites bistro", amount: "-$55.50", date: "19 aug 2024"},
  {profilePicture: DanielCarter, name: "daniel carter", amount: "-$42.30", date: "18 aug 2024"},
  {profilePicture: SunPark, name: "sun park", amount: "+$120.00", date: "17 aug 2024"},
  {profilePicture: UrbanServices, name: "urban services hub", amount: "-$65.00", date: "17 aug 2024"},
];

export const allColors = ["#277C78", "#F2CDAC", "#82C9D7", "#626070", "#C94736", "#826CB0", "#93674F", "#597C7C", "#AF81BA", "#934F6F", "#3F82B2", "#97A0AC", "#BE6C49", "#CAB361", "#7F9161"];


// TODO: remove this budget
// export const budgets = [
//   {title: "bills", amountSpent: 750},
//   {title: "dining out", amountSpent: 75},
//   {title: "personal care", amountSpent: 100},
//   {title: "entertainment", amountSpent: 50},
// ];

export const sampleBudgets = [
  {category: "bills", maximum: 750, theme: "#82C9D7"},
  {category: "dining out", maximum: 75,  theme: "#F2CDAC"},
  {category: "personal care", maximum: 100, theme: "#626070"},
  {category: "entertainment", maximum: 50, theme: "#277C78"},
];

export const samplePots = [
  {name: "Rent", target: 5000, theme: "#934F6F", total: 320},
  {name: "Vacation", target: 300, theme: "#AF81BA", total: 150},
  {name: "Emergency", target: 1000, theme: "#C94736", total: 720},
  {name: "New Laptop", target: 800, theme: "#597C7C", total: 250,},
  {name: "Groceries",  target: 1000, theme: "#CAB361", total: 85},
];

export const sampleTransactions = [
  {avatar: EmmaPic, name: "Emma Richardson", category: "General", date: "2024-08-19T14:23:11Z", amount: 75.50, recurring: false},
  {avatar: SavoryBites, name: "Savory Bites Bistro", category: "Dining Out", date: "2024-08-19T20:23:11Z", amount: -55.50, recurring: false},
  {avatar: DanielCarter, name: "Daniel Carter", category: "General", date: "2024-08-18T09:45:32Z", amount: -42.30, recurring: false},
  {avatar: PixelPlayground, name: "Pixel Playground", category: "Entertainment", date: "2024-08-11T18:45:38Z", amount: -10.00, recurring: true},
  {avatar: AlphaAnalytics, name: "Elevate Education", category: "Education", date: "2024-08-04T11:15:22Z", amount: -50.00, recurring: true},
  {avatar: BravoZenSpa, name: "Serenity Spa & Wellness", category: "Personal Care", date: "2024-08-03T14:00:37Z", amount: -30.00, recurring: true},
  {avatar: CharlieElectricCompany, name: "Spark Electric Solutions", category: "Bills", date: "2024-08-02T09:25:11Z", amount: -100.00, recurring: true},
  {avatar: AquaFlowUtilities, name: "Aqua Flow Utilities", category: "Bills", date: "2024-07-30T13:20:14Z", amount: -100.00, recurring: true},
  {avatar: Ecofuel, name: "EcoFuel Energy", category: "Bills", date: "2024-07-29T11:55:29Z", amount: -35.00, recurring: true},
  {avatar: ByteWise, name: "ByteWise", category: "Lifestyle", date: "2024-07-23T09:35:14Z", amount: -49.99, recurring: true},
  {avatar: NimbusDataStorage, name: "Nimbus Data Storage", category: "Bills", date: "2024-07-21T10:05:42Z", amount: -9.99, recurring: true},
  {avatar: EchoGameStore, name: "Buzz Marketing Group", category: "General", date: "2024-07-26T14:40:23Z", amount: 3358.00, recurring: false},
  {avatar: DeltaTaxi, name: "TechNova Innovations", category: "Shopping", date: "2024-07-25T16:25:37Z", amount: -29.99, recurring: false},
  {avatar: EmmaPic, name: "Emma Richardson", category: "General", date: "2024-07-20T17:30:55Z", amount: -25.00, recurring: false},
  {avatar: LilyRamirez, name: "Lily Ramirez", category: "General", date: "2024-07-15T16:35:04Z", amount: 75.00, recurring: false}
];

// export const summaryOptions = [
//   {name: "current balance", amount: 4836.00},
//   {name: "income", amount: 3814.25},
//   {name: "expenses", amount: 1700.50},
// ];

// export const transactionsList: Transactions[] = [
//   {profilePicture: EmmaPic, name: "emma richardson", category: "general", date: "19 aug 2024", amount: 75.50},
//   {profilePicture: SavoryBites, name: "savory bites bistro", category: "dining out", date: "19 aug 2024", amount: -55.50},
//   {profilePicture: DanielCarter, name: "daniel carter", category: "general", date: "18 aug 2024", amount: -42.30},
//   {profilePicture: SunPark, name: "sun park", category: "general", date: "17 aug 2024", amount: 120},
//   {profilePicture: UrbanServices, name: "urban services hub", category: "general", date: "17 aug 2024", amount: -65},
//   {profilePicture: LiamHughes, name: "liam hughes", category: "general", date: "15 aug 2024", amount: 65.75},
//   {profilePicture: LilyRamirez, name: "lily ramirez", category: "general", date: "14 aug 2024", amount: 50},
//   {profilePicture: EthanClark, name: "ethan clark", category: "dining out", date: "13 aug 2024", amount: -32.50},
//   {profilePicture: JamesThompson, name: "james thompson", category: "entertainment", date: "11 aug 2024", amount: -5},
//   {profilePicture: PixelPlayground, name: "pixel playground", category: "entertainment", date: "11 aug 2024", amount: -10},
//   {profilePicture: BravoZenSpa, name: "bravo zen spa", category: "personal care", date: "29 aug 2024", amount: -25},
//   {profilePicture: AlphaAnalytics, name: "alpha analytics", category: "general", date: "27 aug 2024", amount: 450},
//   {profilePicture: EchoGameStore, name: "echo game store", category: "lifestyle", date: "22 aug 2024", amount: -21.50},
//   {profilePicture: EmmaPic, name: "emma richardson", category: "general", date: "20 aug 2024", amount: -21.50},
//   {profilePicture: DeltaTaxi, name: "delta taxi", category: "transportation", date: "19 aug 2024", amount: -15},
//   {profilePicture: SunPark, name: "sun park", category: "general", date: "15 aug 2024", amount: -15},
//   {profilePicture: BravoZenSpa, name: "bravo zen spa", category: "personal care", date: "13 aug 2024", amount: -25},
//   {profilePicture: LiamHughes, name: "liam hughes", category: "general", date: "5 aug 2024", amount: -10},
//   {profilePicture: AlphaAnalytics, name: "alpha analytics", category: "general", date: "3 aug 2024", amount: 1900},
//   {profilePicture: CharlieElectricCompany, name: "charlie electric company", category: "bills", date: "1 aug 2024", amount: -100},
// ];


export const budgetsList = [
  {
    title: "entertainment", 
    amountSpent: 15, 
    totalBudget: 50, 
    color: "#934F6F",
    latestSpendings: [
      {profilePicture: JamesThompson, name: "james thompson", date: "11 aug 2024", amount: -5},
      {profilePicture: PixelPlayground, name: "pixel playground", date: "11 aug 2024", amount: -10},
      {profilePicture: RinaSato, name: "rina sato", date: "13 jul 2024", amount: -10},
    ]
  },
  {
    title: "bills", 
    amountSpent: 150, 
    totalBudget: 750, 
    color: "#C94736",
    latestSpendings: [
      {profilePicture: CharlieElectricCompany, name: "spark electric solutions", date: "2 aug 2024", amount: -100},
      {profilePicture: RinaSato, name: "rina sato", date: "2 aug 2024", amount: -50},
      {profilePicture: AquaFlowUtilities, name: "aqua flow utilities", date: "30 jul 2024", amount: -100},
    ]
  },
  {
    title: "dining out", 
    amountSpent: 133.75, 
    totalBudget: 75, 
    color: "#826CB0",
    latestSpendings: [
      {profilePicture: SavoryBites, name: "savory bites bistro", date: "19 aug 2024", amount: -55.50},
      {profilePicture: EthanClark, name: "ethan clark", category: "dining out", date: "20 aug 2024", amount: -32.50},
      {profilePicture: EllaPhillips, name: "ella phillips", date: "10 aug 2024", amount: -45},
    ]
  },
  {
    title: "personal care", 
    amountSpent: 40, 
    totalBudget: 100, 
    color: "#F2CDAC",
    latestSpendings: [
      {profilePicture: williamHarris, name: "william harris", date: "5 aug 2024", amount: -10},
      {profilePicture: BravoZenSpa, name: "serenity spa & wellness", date: "3 aug 2024", amount: -30},
      {profilePicture: BravoZenSpa, name: "serenity spa & wellness", date: "3 jul 2024", amount: -30},
    ]
  },
];

export const potsList = [
  {title: "savings", color: "#826CB0", totalSaved: 159, targetAmount: 2000},
  {title: "concert ticket", color: "#626070", totalSaved: 110, targetAmount: 150},
  {title: "gift", color: "#7F9161", totalSaved: 40, targetAmount: 60},
  {title: "new laptop", color: "#3F82B2", totalSaved: 10, targetAmount: 1000},
  {title: "holiday", color: "#AF81BA", totalSaved: 531, targetAmount: 1440},
];

export const billsSummaryList = [
  {title: "paid bills", totalAmount: 190, noOfTransactions: "4"},
  {title: "total upcoming", totalAmount: 194.98, noOfTransactions: "4"},
  {title: "due soon", totalAmount: 59.98, noOfTransactions: "2"},
];

export const recurringBillsTransactions: RecurringBillsTransactions[] = [
  {profilePicture: CharlieElectricCompany, name: "spark electric solutions", date: "monthly-2nd", amount: 100},
  {profilePicture: BravoZenSpa, name: "serenity spa & wellness", date: "monthly-3rd", amount: 30},
  {profilePicture: AlphaAnalytics, name: "elevate education", date: "monthly-4th", amount: 50},
  {profilePicture: PixelPlayground, name: "pixel playground", date: "monthly-11th", amount: 10},
  {profilePicture: NimbusDataStorage, name: "nimbus data storage", date: "monthly-21st", amount: 9.99},
  {profilePicture: ByteWise, name: "byteWise", date: "monthly-23rd", amount: 49.99},
  {profilePicture: Ecofuel, name: "ecofuel energy", date: "monthly-2nd", amount: 35},
  {profilePicture: AquaFlowUtilities, name: "aqua flow utilities", date: "monthly-30th", amount: 100},
];