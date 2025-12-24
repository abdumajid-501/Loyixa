import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "../pages/Header/Header";
import Footer from "../pages/Footer/Footer";

function MainLayout() {
  const { t } = useTranslation();

  return (
    <div style={styles.layout}>
      <header style={styles.header}><Header /></header>
      <main style={styles.main}>
        <Outlet />
      </main>
      <footer style={styles.footer}><Footer /></footer>
    </div>
  );
}

const styles = {
  layout: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh", 
  },
  header: {
    backgroundColor: "#161B2F",
    color: "#fff",
    padding: "1rem",
    textAlign: "center",
  },
  main: {
    flex: 1, 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0B0F1A",
  },
  footer: {
    backgroundColor: "#161B2F",
    color: "#fff",
    padding: "1rem",
    textAlign: "center",
  },
};

export default MainLayout;
