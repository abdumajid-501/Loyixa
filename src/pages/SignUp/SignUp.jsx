import { useRef, useState } from "react";
import { Card } from "../../components/ui/Card/Card.style";
import { Input } from "../../components/ui/Input/input.style";
import Button from "../../components/ui/Button/Button";
import { TitleL } from "../../styles/style";
import { Link } from "react-router-dom";
import { theme } from "../../styles/theme";
import { useTranslation } from "react-i18next";

function SignUp() {
  const { t } = useTranslation();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const repeatPasswordRef = useRef(null);

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    repeatPassword: false,
    repeatPasswordMessage: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value.trim();
    const repeatPassword = repeatPasswordRef.current.value.trim();

    const newErrors = {
      email: !email,
      password: !password,
      repeatPassword: !repeatPassword || password !== repeatPassword,
      repeatPasswordMessage: repeatPassword && password !== repeatPassword 
        ? t("Password does not match") 
        : t("Can’t be empty")
    };

    setErrors(newErrors);

    if (!newErrors.email && !newErrors.password && !newErrors.repeatPassword) {
      emailRef.current.value = "";
      passwordRef.current.value = "";
      repeatPasswordRef.current.value = "";
      setErrors({
        email: false,
        password: false,
        repeatPassword: false,
        repeatPasswordMessage: "",
      });
    }
  };

  const inputFields = [
    { ref: emailRef, type: "email", placeholder: t("Email address"), error: errors.email, message: t("Can’t be empty") },
    { ref: passwordRef, type: "password", placeholder: t("Password"), error: errors.password, message: t("Can’t be empty") },
    { ref: repeatPasswordRef, type: "password", placeholder: t("Repeat password"), error: errors.repeatPassword, message: errors.repeatPasswordMessage }
  ];

  return (
    <div className="sign-up">
      <Card>
        <TitleL>{t("SignUp")}</TitleL>

        <form className="label" onSubmit={handleSubmit}>
          {inputFields.map((input, idx) => (
            <div key={idx} style={{ position: "relative", marginBottom: "20px" }}>
              <Input
                type={input.type}
                placeholder={input.placeholder}
                ref={input.ref}
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

          <Button type="submit">{t("Sign Up Button")}</Button>

          <div
            style={{
              display: "flex",
              gap: "9px",
              margin: "0 auto",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <p>{t("Already have an account?")}</p>
            <Link to={"/Login"}>{t("Login")}</Link>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default SignUp;
