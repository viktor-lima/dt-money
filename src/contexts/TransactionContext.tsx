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
  transactions: Transaction[]
}

interface TransactionProviderProps{
  children: ReactNode;
}

export const transactionContext = createContext({} as TransactionContexType)

export function TransactionProvider({children} : TransactionProviderProps) {

    const [ transactions, setTransactions ] = useState<Transaction[]>([])
  

   async function loadTransactions () {
      const response = await fetch('http://localhost:3333/transactions')
      const data = await response.json();
      setTransactions(data)
    }
  
    useEffect(() => {
      loadTransactions()
    }, [])

  return (
    <transactionContext.Provider value={{transactions}}>
      {children}
    </transactionContext.Provider>
  )
}