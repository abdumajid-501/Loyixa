import { useState } from "react";
import { Card } from "../../components/ui/Card/Card.style";
import { Input } from "../../components/ui/Input/input.style";
import Button from "../../components/ui/Button/Button";
import { TitleL } from "../../styles/style";
import { Link, useNavigate } from "react-router-dom";
import { theme } from "../../styles/theme";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import {
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, googleProvider } from "../../firebase/firebase";

function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  // 🔹 EMAIL / PASSWORD LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email")?.trim();
    const password = formData.get("password")?.trim();

    const newErrors = {
      email: !email,
      password: !password,
    };
    setErrors(newErrors);

    if (newErrors.email || newErrors.password) return;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      localStorage.setItem(
        "user",
        JSON.stringify({ uid: user.uid, email: user.email })
      );

      toast.success("Kirish muvaffaqiyatli!");
      e.target.reset();
      navigate("/");
    } catch (error) {
      toast.error("Email yoki parol noto‘g‘ri");
      console.error(error);
    }
  };

  // 🔹 GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      localStorage.setItem(
        "user",
        JSON.stringify({ uid: user.uid, email: user.email })
      );

      toast.success("Google orqali muvaffaqiyatli kirdingiz!");
      navigate("/");
    } catch (error) {
      toast.error("Google login xatosi");
      console.error(error);
    }
  };

  return (
    <div className="login">
      <Card>
        <TitleL>{t("Login")}</TitleL>

        <form className="label" onSubmit={handleSubmit}>
          {/* EMAIL */}
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <Input
              type="email"
              name="email"
              placeholder={t("Email address")}
              style={{
                borderBottomColor: errors.email
                  ? theme.colors.dark.red
                  : undefined,
              }}
            />
            {errors.email && (
              <span style={errorStyle}>{t("Can’t be empty")}</span>
            )}
          </div>

          {/* PASSWORD */}
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <Input
              type="password"
              name="password"
              placeholder={t("Password")}
              style={{
                borderBottomColor: errors.password
                  ? theme.colors.dark.red
                  : undefined,
              }}
            />
            {errors.password && (
              <span style={errorStyle}>{t("Can’t be empty")}</span>
            )}
          </div>

          {/* EMAIL LOGIN BUTTON */}
          <Button type="submit">Kirish</Button>

          {/* GOOGLE LOGIN BUTTON */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            style={{
              color: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundColor: "#05427e",
              padding: "14px",
              marginTop: "10px",
              width: "100%",
              cursor: "pointer",
            }}
          >
            Google orqali kirish
          </button>

          {/* SIGN UP LINK */}
          <div
            style={{
              display: "flex",
              gap: "9px",
              margin: "0 auto",
              justifyContent: "center",
              marginTop: "12px",
            }}
          >
            <p>{t("Don't have an account?")}</p>
            <Link to="/sign-up">{t("Sign Up")}</Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

const errorStyle = {
  position: "absolute",
  top: "4px",
  right: "8px",
  color: theme.colors.dark.red,
  fontSize: "12px",
  fontWeight: "500",
};

export default Login;
