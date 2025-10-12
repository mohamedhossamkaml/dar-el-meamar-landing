import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("lang", newLang); // 👈 حفظ اللغة
  };

  return (
    <button onClick={toggleLang}>
      {i18n.language === "en" ? "العربية" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
