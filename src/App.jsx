import { ThemeProvider } from "styled-components"
import Route from "./routes/Route"
import { GlobalStyle } from "./styles/style"
import { ToastContainer } from "react-toastify"

function App() {
  return <>
    <GlobalStyle />
    <ToastContainer />
    <Route />
  </>

}

export default App