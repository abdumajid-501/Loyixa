import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header style={styles.header}>
      <div style={styles.logo}>Xolmatov Abdumajid</div>
      <nav style={styles.nav}>
        <div style={styles.navLink} onClick={() => navigate("/login")}>
          Login
        </div>
        <div style={styles.navLink} onClick={() => navigate("/sign-up")}>
          Sign Up
        </div>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem 2rem",
    backgroundColor: "#161B2F",
    color: "#FFFFFF",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "700",
    cursor: "pointer"
  },
  nav: {
    display: "flex",
    gap: "1.5rem",
  },
  navLink: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontWeight: "500",
    cursor: "pointer", 
    transition: "color 0.2s",
  },
};

export default Header;
