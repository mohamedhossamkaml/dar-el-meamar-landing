import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

interface VantaProps {
  enabled?: boolean;           // لتفعيل أو تعطيل الخلفية
  className?: string;          // لإضافة كلاس خارجي
  color?: number;              // لون الخطوط
  backgroundColor?: number;    // لون الخلفية
}

const VantaBackground = ({
  enabled = true,
  className = "",
  color = 0x14b8a6,            // اللون الافتراضي: teal
  backgroundColor = 0x0f172a,  // الخلفية الافتراضية: dark navy
}: VantaProps) => {
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
          color,
          backgroundColor,
        })
      );
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [enabled, color, backgroundColor]);

  return <div ref={vantaRef} className={`absolute inset-0 ${className}`} />;
};

export default VantaBackground;
