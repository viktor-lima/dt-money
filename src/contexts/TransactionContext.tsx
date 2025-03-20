import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}
interface CreatTransactionRequest {
  description: string;
  price: number;
  category: string;
  type: 'income' | 'outcome';
}


interface TransactionContexType {
  transactions: Transaction[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreatTransactionRequest) => Promise<void>;
}

interface TransactionProviderProps{
  children: ReactNode;
}

export const transactionContext = createContext({} as TransactionContexType)

export function TransactionProvider({children} : TransactionProviderProps) {

    const [ transactions, setTransactions ] = useState<Transaction[]>([])
  

   async function fetchTransactions ( query?: string) {
      const response = await api.get('/transactions', {
        params:{
          _sort: 'createdAt',
          _order: 'desc',
          q: query
        }
      })
      setTransactions(response.data)
    }

    async function createTransaction(request: CreatTransactionRequest) {
      const {
        description,
        price,
        category,
        type
      } = request;
      const response = await api.post('/transactions', {
        description,
        price,
        category,
        type,
        createdAt: new Date()
      })
      setTransactions(state => [response.data, ...state])
    }
  
    useEffect(() => {
      fetchTransactions()
    }, [])

  return (
    <transactionContext.Provider value={{transactions, fetchTransactions, createTransaction,}}>
      {children}
    </transactionContext.Provider>
  )
}