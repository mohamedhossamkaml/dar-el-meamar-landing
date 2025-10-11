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
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof NET> | null>(null);

  // Destroy Vanta effect if color/backgroundColor changes
  useEffect(() => {
    if (vantaEffect) {
      vantaEffect.destroy();
      setVantaEffect(null);
    }
  }, [color, backgroundColor]);

  // Initialize Vanta effect
  useEffect(() => {
    if (enabled && !vantaEffect && vantaRef.current) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 2.0,
          scaleMobile: 2.0,
          maxDistance: 31.0,
          color,
          backgroundColor,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [enabled, vantaEffect]);

  return <div ref={vantaRef} className={`absolute inset-0 ${className}`} />;
};

export default VantaBackground;
