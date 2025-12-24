import { useState } from "react";
import { Card } from "../../components/ui/Card/Card.style";
import { Input } from "../../components/ui/Input/input.style";
import Button from "../../components/ui/Button/Button";
import { TitleL } from "../../styles/style";
import { Link, useNavigate } from "react-router-dom";
import { theme } from "../../styles/theme";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

function SignUp() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    repeatPassword: false,
    repeatPasswordMessage: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = Object.fromEntries(new FormData(e.target).entries());
    const email = formData.email?.trim();
    const password = formData.password?.trim();
    const repeatPassword = formData.repeatPassword?.trim();

    if (!email || !password || !repeatPassword) {
      setErrors({
        email: !email,
        password: !password,
        repeatPassword: !repeatPassword,
        repeatPasswordMessage: !repeatPassword ? "To‘ldirilishi kerak" : "",
      });
      toast.error("Barcha maydonlar to‘ldirilishi kerak");
      return;
    }

    if (password !== repeatPassword) {
      setErrors({
        ...errors,
        repeatPassword: true,
        repeatPasswordMessage: "Parollar mos emas",
      });
      toast.error("Parollar mos emas");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      localStorage.setItem("user", JSON.stringify({ uid: user.uid, email: user.email }));
      e.target.reset();

      toast.success("Ro‘yxatdan o‘tish muvaffaqiyatli!");

      setErrors({
        email: false,
        password: false,
        repeatPassword: false,
        repeatPasswordMessage: "",
      });

      navigate("/"); 
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        setErrors(prev => ({ ...prev, email: true, repeatPasswordMessage: "Bu email allaqachon ishlatilgan" }));
      } else if (error.code === "auth/weak-password") {
        setErrors(prev => ({ ...prev, password: true, repeatPasswordMessage: "Parol juda zaif" }));
      } else if (error.code === "auth/invalid-email") {
        setErrors(prev => ({ ...prev, email: true, repeatPasswordMessage: "Email noto‘g‘ri" }));
      }

      toast.error(error.message);
    }
  };

  return (
    <div className="sign-up">
      <Card>
        <TitleL>{t("SignUp")}</TitleL>

        <form className="label" onSubmit={handleSubmit}>
          <div style={{ position: "relative", marginBottom: "20px" }}>
            <Input
              type="email"
              name="email"
              placeholder={t("Email address")}
              style={{
                borderBottomColor: errors.email ? theme.colors.dark.red : undefined,
              }}
            />
            {errors.email && <span style={errorStyle}>{errors.repeatPasswordMessage || t("Can’t be empty")}</span>}
          </div>

          <div style={{ position: "relative", marginBottom: "20px" }}>
            <Input
              type="password"
              name="password"
              placeholder={t("Password")}
              style={{
                borderBottomColor: errors.password ? theme.colors.dark.red : undefined,
              }}
            />
            {errors.password && <span style={errorStyle}>{errors.repeatPasswordMessage || t("Can’t be empty")}</span>}
          </div>

          <div style={{ position: "relative", marginBottom: "20px" }}>
            <Input
              type="password"
              name="repeatPassword"
              placeholder={t("Repeat password")}
              style={{
                borderBottomColor: errors.repeatPassword ? theme.colors.dark.red : undefined,
              }}
            />
            {errors.repeatPassword && <span style={errorStyle}>{errors.repeatPasswordMessage}</span>}
          </div>

          <Button type="submit">{t("Sign Up Button")}</Button>

          <div style={{ display: "flex", gap: "9px", margin: "0 auto", justifyContent: "center" }}>
            <p>{t("Already have an account?")}</p>
            <Link to="/login">{t("Login")}</Link>
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

export default SignUp;
