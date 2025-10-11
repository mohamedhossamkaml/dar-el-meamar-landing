// components/VantaBackground.tsx
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

interface VantaProps {
  enabled?: boolean;
  className?: string;
}

const VantaBackground = ({ enabled = true, className = "" }: VantaProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof NET> | null>(null);

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
          scale: 1.0,
          scaleMobile: 1.0,
          // color: 0x1cae89,
          backgroundColor: 0x0f172a,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [enabled]);

  return <div ref={vantaRef} className={`absolute inset-0 ${className}`} />;
};

export default VantaBackground;
// Usage Example: