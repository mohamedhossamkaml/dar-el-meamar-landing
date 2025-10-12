import { useTranslation } from "../../hooks/useTranslation";

const LanguageSwitcher = () => {
  const { lang, setLang } = useTranslation();

  const toggleLang = () => {
    setLang(lang === "en" ? "ar" : "en");
  };

  return (
    <button onClick={toggleLang}>
      {lang === "en" ? "العربية" : "English"}
    </button>
  );
};

export default LanguageSwitcher;
