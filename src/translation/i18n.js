import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      "SignUp": "Sign Up",
      "Email address": "Email address",
      "Password": "Password",
      "Repeat password": "Repeat password",
      "Can't be empty": "Can't be empty",
      "Password does not match": "Password does not match",
      "Already have an account?": "Already have an account?",
      "Login": "Login",
      "Sign Up Button": "Sign Up",
      "Passwords do not match!": "Passwords do not match!",
      "Successfully completed.": "Successfully completed."
    }
  },
  uz: {
  translation: {
    "SignUp": "Ro'yxatdan o'tish",
    "Email address": "Elektron pochta",
    "Password": "Parol",
    "Repeat password": "Parolni takrorlang",
    "Can't be empty": "Bo'sh bo'lishi mumkin emas",
    "Password does not match": "Parollar mos emas",
    "Already have an account?": "Allaqachon akkauntingiz bormi?",
    "Login": "Kirish",
    "Sign Up Button": "Ro'yxatdan o'tish",
      "Passwords do not match!": "Parollar mo kelmadi!",
    "Successfully completed.": "Muaffaqiyatli bajarildi!"
  }
}

};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "uz",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
