import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

interface VantaProps {
  enabled?: boolean;
  className?: string;
  color?: number;
  backgroundColor?: number;
}

const VantaBackground = ({
  enabled = true,
  className = "",
  color = 0x14b8a6,
  backgroundColor = 0x0f172a,
}: VantaProps) => {
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


      return () => {
        if (effect) effect.destroy();
      };
    }
  }, [enabled, color, backgroundColor]);

  return <>
  <div ref={vantaRef} className={`absolute inset-0 ${className}`} />;
  </>
};

export default VantaBackground;
