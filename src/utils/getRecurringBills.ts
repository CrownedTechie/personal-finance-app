import { useData } from "@/hooks/useData";

export const getRecurringBills = () => {
 const { transactions } = useData();
 const recurringTransactions = transactions.filter(item => item.recurring);

 const now = new Date("2024-07-28");
 const soon = new Date("2024-07-28");
 soon.setDate(now.getDate() + 3);

 const modifiedRecurringTransactions = recurringTransactions.map(item => {
	const itemDate = new Date(item.date);

	let status = "paid";
	if (itemDate > now && itemDate <= soon ) {
	 status = "dueSoon";
	} else if (itemDate > soon) {
	 status = "upcoming";
	}

	return {...item, status};
 })

 const paidBills = modifiedRecurringTransactions.filter(item => item.status === "paid");
 const dueSoon = modifiedRecurringTransactions.filter(item => item.status === "dueSoon");
 const upcomingBills = modifiedRecurringTransactions.filter(item => item.status === "upcoming");


 const totalPaidBills = paidBills.reduce((sum, item) => sum + item.amount, 0);
 const totalDueSoon = dueSoon.reduce((sum, item) => sum + item.amount, 0);
 const totalUpcomingBills = upcomingBills.reduce((sum, item) => sum + item.amount, 0);
 
 return { 
	recurringTransactions: modifiedRecurringTransactions, 
	paidBills, 
	dueSoon, 
	upcomingBills, 
	totalPaidBills, 
	totalDueSoon, 
	totalUpcomingBills
 };
}