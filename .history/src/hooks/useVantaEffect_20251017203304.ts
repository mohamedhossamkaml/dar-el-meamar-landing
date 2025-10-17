// src/hooks/useVantaEffect.ts
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

interface VantaOptions {
  enabled?: boolean;
  color?: number;
  backgroundColor?: number;
}

export const useVantaEffect = ({
  enabled = true,
  color = 0x14b8a6,
  backgroundColor = 0x0f172a,
}: VantaOptions) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (enabled && vantaRef.current) {
      if (vantaEffect) vantaEffect.destroy();

      const effect = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 2.0,
        scaleMobile: 2.0,
        maxDistance: 25.0,
        color,
        backgroundColor,
      });

      setVantaEffect(effect);

      // Resize after short delay to fix initial miscalculation
      const timeout = setTimeout(() => {
        effect.resize();
      }, 500);

      // Resize on window resize
      const handleResize = () => {
        effect.resize();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        clearTimeout(timeout);
        window.removeEventListener("resize", handleResize);
        if (effect) effect.destroy();
      };
    }
  }, [enabled, color, backgroundColor]);

  return vantaRef;
};
