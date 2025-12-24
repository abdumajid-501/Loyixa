
function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.content}>
        <p style={styles.text}>© 2025 MyApp. All rights reserved.</p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#161B2F",
    color: "#FFFFFF",
    padding: "1rem 2rem",
  },
  content: {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
  },
  text: {
    margin: 0,
    fontSize: "0.9rem",
    textAlign: "center", 
  },
};

export default Footer;
