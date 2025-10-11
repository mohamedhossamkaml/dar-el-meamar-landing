import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.net.min";

interface VantaProps {
  enabled?: boolean;
  className?: string;
  color?: number;
  backgroundColor?: number;
  children?: React.ReactNode;
  fullScreen?: boolean; // لو عايز الخلفية تغطي الشاشة كلها
}

const VantaBackground = ({
  enabled = true,
  className = "",
  color = 0x14b8a6,
  backgroundColor = 0x0f172a,
  children,
  fullScreen = false,
}: VantaProps) => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<ReturnType<typeof NET> | null>(null);

  useEffect(() => {
    if (!enabled || !vantaRef.current) return;

    if (vantaEffect) {
      vantaEffect.destroy();
      setVantaEffect(null);
    }

    const effect = NET({
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
    });

    setVantaEffect(effect);

    return () => {
      effect.destroy();
    };
  }, [enabled, color, backgroundColor]);

  const layoutClass = fullScreen
    ? "absolute inset-0"
    : "w-full h-full relative";

  return (
    <div ref={vantaRef} className={`${layoutClass} ${className}`}>
      {children}
    </div>
  );
};

export default VantaBackground;
