import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyled } from "./styles/global";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyled />
      <h1>Helo world</h1>
    </ThemeProvider>
  )
}
