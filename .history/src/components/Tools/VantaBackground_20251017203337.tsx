// src/components/Tools/VantaBackground.tsx

import { useVantaEffect } from "../../hooks/useVantaEffect";


interface VantaProps {
  enabled?: boolean;
  className?: string;
  color?: number;
  backgroundColor?: number;
}

const VantaBackground = ({
  enabled = true,
  className = "",
  color,
  backgroundColor,
}: VantaProps) => {
  const vantaRef = useVantaEffect({ enabled, color, backgroundColor });

  return (
    <>
      <div
        ref={vantaRef}
        className={`absolute inset-0 w-full h-full z-0 ${className}`}
      />
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-br
                   from-teal-300 via-white to-teal-500
                   dark:from-gray-900 dark:via-gray-800 dark:to-gray-950
                   opacity-90 pointer-events-none z-10"
      />
    </>
  );
};

export default VantaBackground;
