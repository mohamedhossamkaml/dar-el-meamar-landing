import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLang = () => {
    i18n.changeLanguage(i18n.language === "en" ? "ar" : "en");
  };

  return (
    <button onClick={toggleLang}>
      {i18n.language === "en" ? "العربية" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
