import { useState, useEffect } from "react";
import en from "../locales/en.json";
import ar from "../locales/ar.json";

const languages = { en, ar };

export const useTranslation = () => {
  const [lang, setLang] = useState<"en" | "ar">("en");

  // تحميل اللغة من localStorage عند أول تشغيل
  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as "en" | "ar" | null;
    if (savedLang) setLang(savedLang);
  }, []);

  // حفظ اللغة في localStorage عند التغيير
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  const t = (key: string) => {
    return languages[lang][key as keyof typeof en] || key;
  };

  return { t, lang, setLang };
};

export default useTranslation;