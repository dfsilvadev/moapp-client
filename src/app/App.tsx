import { ThemeProvider } from "styled-components"

import { DefaultTheme, GlobalStyles } from "@/presenter/styles"
import { Input } from "@/presenter/components"

function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <span>
        <Input
          type="text"
          placeholder="Entre com seu e-mail"
          label="E-mail"
          name="email"
          id="email"
        />
      </span>
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
