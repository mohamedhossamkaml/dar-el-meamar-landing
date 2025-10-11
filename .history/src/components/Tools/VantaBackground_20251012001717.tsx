interface VantaProps {
  enabled?: boolean;
  className?: string;
  color?: number;
  backgroundColor?: number;
}

const VantaBackground = ({
  enabled = true,
  className = "",
  color = 0x14b8a6, // teal default
  backgroundColor = 0x0f172a, // dark default
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
