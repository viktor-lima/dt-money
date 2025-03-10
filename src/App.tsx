import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyled } from "./styles/global";
import { Transactions } from "./pages/transactions";
import { TransactionProvider } from "./contexts/TransactionContext";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <TransactionProvider>
        <Transactions />
      </TransactionProvider>
    </ThemeProvider>
  )
}
