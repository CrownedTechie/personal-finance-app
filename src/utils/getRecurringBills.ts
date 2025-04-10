import { useData } from "@/hooks/useData";

export const getRecurringBills = () => {
 const { transactions } = useData();
 const recurringTransactions = transactions.filter(item => item.recurring);

 const now = new Date("2024-07-28");
 const soon = new Date("2024-07-28");
 soon.setDate(now.getDate() + 3);

 const paidBills = recurringTransactions.filter(item => new Date(item.date) <= now);
 const unpaidBills = recurringTransactions.filter(item => new Date(item.date) > now);
 const dueSoon = unpaidBills.filter(item => new Date(item.date) <= soon);
 const upcomingBills = unpaidBills.filter(item => new Date(item.date) > soon);


 const totalPaidBills = paidBills.reduce((sum, item) => sum + item.amount, 0);
 const totalDueSoon = dueSoon.reduce((sum, item) => sum + item.amount, 0);
 const totalUpcomingBills = upcomingBills.reduce((sum, item) => sum + item.amount, 0);
 
 return { paidBills, dueSoon, upcomingBills, totalPaidBills, totalDueSoon, totalUpcomingBills};
}