import { BudgetProps, TransactionProps } from "@/constants/types";
import { useData } from "./useData";
import { useMemo } from "react";
import { allColors } from "@/constants/data";

interface IModifiedBudgets {
 category: string;
 amountSpent: number;
 maximum: number;
 theme: string;
 latestSpendings: TransactionProps[];
};

export const useModifiedBudgets = () => {
 const { budgets, transactions } = useData();

 // Normal modified budgets
 const modifiedBudgets = useMemo(() => {
  // Helper function to help me create a new data structure for a single budget
  const mapTransactionsToBudgets = (budgetData: BudgetProps): IModifiedBudgets => {
   const {category, maximum, theme} = budgetData;
   const latestSpendings = transactions.filter(item => item.category === budgetData.category);
   const amountSpent = latestSpendings.reduce((sum, item) => sum + Math.abs(item.amount), 0);

   return { category, amountSpent, maximum, theme, latestSpendings };
  };

  return budgets.map(mapTransactionsToBudgets);
 }, [budgets, transactions]);

 // Modified budgets with random colours. I'm using this in the dashboard
 const budgetsWithColors = useMemo(() => {
  const availableColors = [...allColors];
  return modifiedBudgets.map(item => {
   const randomIndex = Math.floor(Math.random() * availableColors.length);
   const selectedColor = availableColors.splice(randomIndex, 1)[0];
   return { ...item, color: selectedColor };
  });
 }, [modifiedBudgets]);

 const overallSpent = modifiedBudgets.reduce((sum, item) => sum + item.amountSpent, 0);
 const overallBudget = modifiedBudgets.reduce((sum, item) => sum + item.maximum, 0);

 return { modifiedBudgets, budgetsWithColors, overallSpent, overallBudget };
};
