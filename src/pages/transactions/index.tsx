import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHigthlight, TransactionsContainer, TransactionsTable } from "./styles";
import { transactionContext } from "../../contexts/TransactionContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";




export function Transactions () {

  const { transactions } = useContext(transactionContext)

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
                        {row.type === 'outcome' && '- '}
                        {priceFormatter.format(row.price)}
                    </PriceHigthlight>
                  </td>
                  <td>{row.type}</td>
                  <td>{dateFormatter.format(new Date(row.createdAt))}</td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

    </div>
  )
}