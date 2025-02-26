import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHigthlight, TransactionsContainer, TransactionsTable } from "./styles";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}


export function Transactions () {

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
    <div>
      <Header />
      <Summary />


      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            {transactions?.map(row => {
              return (
                <tr key={row.id}>
                  <td width="50%">{row.description}</td>
                  <td>
                    <PriceHigthlight variante={row.type}>
                        {row.price}
                    </PriceHigthlight>
                  </td>
                  <td>{row.type}</td>
                  <td>{row.createdAt}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

    </div>
  )
}