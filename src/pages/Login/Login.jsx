import { useState } from "react";
import { Card } from "../../components/ui/Card/Card.style";
import { Input } from "../../components/ui/Input/input.style";
import Button from "../../components/ui/Button/ButtonLogin"; 
import { TitleL } from "../../styles/style";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";
import { useTranslation } from "react-i18next";

function Login() {
  const { t } = useTranslation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {
      email: email.trim() === "",
      password: password.trim() === "",
    };

    setErrors(newErrors);

    const isValid = !Object.values(newErrors).includes(true);
    if (isValid) {
      setEmail("");
      setPassword("");
      setErrors({ email: false, password: false });
    }
  };

  const inputs = [
    { value: email, setValue: setEmail, placeholder: t("Email address"), error: errors.email, type: "email", message: t("Bo‘sh bo‘lishi mumkin emas") },
    { value: password, setValue: setPassword, placeholder: t("Password"), error: errors.password, type: "password", message: t("Bo‘sh bo‘lishi mumkin emas") }
  ];

  return (
    <div className="login">
      <Card>
        <TitleL>{t("Kirish")}</TitleL>

        <form className="label" onSubmit={handleSubmit}>
          {inputs.map((input, idx) => (
            <div key={idx} style={{ position: "relative", marginBottom: "20px" }}>
              <Input
                type={input.type}
                placeholder={input.placeholder}
                value={input.value}
                onChange={(e) => input.setValue(e.target.value)}
                style={{
                  borderBottomColor: input.error ? theme.colors.dark.red : undefined,
                }}
              />
              {input.error && (
                <span
                  style={{
                    position: "absolute",
                    top: "4px",
                    right: "8px",
                    color: theme.colors.dark.red,
                    fontSize: "12px",
                    fontWeight: "500",
                  }}
                >
                  {input.message}
                </span>
              )}
            </div>
          ))}

          <Button type="submit">{t("Kirish")}</Button>

          <div
            style={{
              display: "flex",
              gap: "9px",
              margin: "0 auto",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>{t("Hisobingiz yo‘qmi?")}</p>
            <Link to={"/sign-up"}>{t("Ro‘yxatdan o‘tish")}</Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Login;
