import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    // Parallax effect على الخلفية
    gsap.to(el, {
      backgroundPosition: "50% 100%",
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Reveal animation
    gsap.from(".hero-text", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center
                 bg-gradient-to-br from-teal-600 to-teal-800 text-white overflow-hidden"
    >
      <div className="text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-text text-5xl md:text-7xl font-bold"
        >
          Building Your <span className="text-teal-300">Dreams</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="hero-text text-xl md:text-2xl text-teal-100"
        >
          Into Reality with Dar El-Meamar
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
