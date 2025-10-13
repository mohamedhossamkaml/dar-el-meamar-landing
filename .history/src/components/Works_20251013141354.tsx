import { motion } from "framer-motion";
import CountUp from "./Tools/motion/CountUp";
import myImage from "../assets/bg.png"; // تأكد إن المسار صحيح
import {
  fadeInUp,
  fadeIn,
  scaleIn,
  staggerContainer,
} from "../utils/animations";
import { useTranslation } from "react-i18next";

const Works = () => {
  const { t, i18n } = useTranslation();

  // جلب البيانات من ملف الترجمة
  const stats = t("works.stats", { returnObjects: true }) as {
    value: string;
    label: string;
    suffix?: string;
  }[];

  return (
    <motion.section
      key={i18n.language}
      id="works"
      className="relative py-20 text-white overflow-hidden
                 dark:text-gray-100 transition-colors duration-300"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Background Image + Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${myImage})` }}
      />
