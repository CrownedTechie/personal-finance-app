export type BudgetProps = {
 category: string;
 maximum: number;
 theme: string;
 color?: string;
};

export type PotProps = {
 name: string;
 target: number;
 theme: string;
 total: number;
};

export type BalanceProps = {
 current: number;
 expenses: number;
 income: number;
};

export type TransactionProps = {
 amount: number;
 avatar: string;
 category: string;
 date: string;
 name: string;
 recurring: boolean;
};