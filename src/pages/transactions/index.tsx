import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHigthlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions () {
  return (
    <div>
      <Header />
      <Summary />


      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHigthlight variante="income">
                    R$ 12.000,00
                </PriceHigthlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHigthlight variante="income">
                    R$ 12.000,00
                </PriceHigthlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHigthlight variante="outcome">
                    - R$ 12.000,
                </PriceHigthlight>
              </td>
              <td>Venda</td>
              <td>13/04/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>

    </div>
  )
}