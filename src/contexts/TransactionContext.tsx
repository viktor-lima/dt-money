import { createContext, ReactNode, useEffect, useState } from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface TransactionContexType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionProviderProps{
  children: ReactNode;
}

export const transactionContext = createContext({} as TransactionContexType)

export function TransactionProvider({children} : TransactionProviderProps) {

    const [ transactions, setTransactions ] = useState<Transaction[]>([])
  

   async function fetchTransactions ( query?: string) {
      const url = new URL('http://localhost:3333/transactions')
      if(query) {
        url.searchParams.append('q', query)
      }
      const response = await fetch(url)
      const data = await response.json();
      setTransactions(data)
    }
  
    useEffect(() => {
      fetchTransactions()
    }, [])

  return (
    <transactionContext.Provider value={{transactions, fetchTransactions,}}>
      {children}
    </transactionContext.Provider>
  )
}