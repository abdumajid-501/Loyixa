import { ThemeProvider } from "styled-components"
import Route from "./routes/Route"
import { GlobalStyle } from "./styles/style"

function App() {
  return <>
        <GlobalStyle />
    <Route />
  </>

}

export default App