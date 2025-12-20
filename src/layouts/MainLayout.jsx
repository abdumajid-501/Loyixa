import { Outlet } from "react-router-dom"
import { useTranslation } from "react-i18next"
import { Container } from "../styles/style"

function MainLayout() {
    const {t, i18n} = useTranslation()
  return (
      <>
          <header>header</header>
          <main>
              <Outlet />
          </main>
          <footer>footer</footer>
      </>
  )
}

export default MainLayout