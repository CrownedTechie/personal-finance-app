import { db } from "@/config/firebase";
import { BalanceProps, BudgetProps, PotProps, TransactionProps } from "@/constants/types";
import { getErrorMessage } from "@/utils/getErrorMessage";
import { collection, getDocsFromServer } from "firebase/firestore";
import { createContext, ReactNode, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface IDataProps {
  id: string;
  balance: BalanceProps;
  budgets: BudgetProps[];
  pots: PotProps[];
  transactions: TransactionProps[];
};

export const defaultData: IDataProps = {
  id: "",
  balance: {current: 0, expenses: 0, income: 0},
  budgets: [],
  pots: [],
  transactions: []
};

interface IDataProviderProps {
  children: ReactNode;
};

export const DataContext = createContext<IDataProps>(defaultData); 
//TODO: create a static data.ts file so it can be used as a default value for the context and also for the usestate

// Helper to map Firestore data
const mapDocToData = (doc: any): IDataProps => {
  const data = doc.data();
  return {
    id: doc.id,
    balance: data.balance,
    budgets: data.budgets ?? [],
    pots: data.pots ?? [],
    transactions: data.transactions ?? []
  };
};

// Fetch function
const fetchAppData = async () => {
  const snapshot = await getDocsFromServer(collection(db, "appData"));
  return snapshot.docs.length > 0 ? mapDocToData(snapshot.docs[0]) : defaultData;
};

const DataProvider = ({ children }: IDataProviderProps) => {
 const [data, setData] = useState<IDataProps>(defaultData);

 useEffect(() => {
  const loadData = async () => {
   try{
    const fetchedData = await fetchAppData();
    setData(fetchedData);
   }
   catch(error) {
    const errorMessage = getErrorMessage(error);
    toast.error(errorMessage);
   }
  };
  loadData();
 }, []);

 return(
  <DataContext.Provider value={data}>
   {children}
  </DataContext.Provider>
 )
};

export default DataProvider;