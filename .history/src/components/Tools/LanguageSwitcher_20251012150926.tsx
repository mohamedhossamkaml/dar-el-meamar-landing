import { useTranslation } from "../hooks/useTranslation";

const LanguageSwitcher = () => {
  const { lang, setLang } = useTranslation();

  return (
    <div>
      <button
        onClick={() => setLang("en")}
        style={{ fontWeight: lang === "en" ? "bold" : "normal" }}
      >
        English
      </button>
      <button
        onClick={() => setLang("ar")}
        style={{ fontWeight: lang === "ar" ? "bold" : "normal" }}
      >
        العربية
      </button>
    </div>
  );
};

export default LanguageSwitcher;
