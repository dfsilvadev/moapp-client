import { ThemeProvider } from "styled-components"

import { DefaultTheme, GlobalStyles } from "@/presenter/styles"

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <div>MOAPP</div>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
