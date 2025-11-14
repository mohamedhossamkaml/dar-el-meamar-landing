import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';

interface CardRotateProps {
  children: React.ReactNode;
  onSendToBack: () => void;
  sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
    if (Math.abs(info.offset.x) > sensitivity || Math.abs(info.offset.y) > sensitivity) {
      onSendToBack();
    } else {
      x.set(0);
      y.set(0);
    }
  }

  return (
    <motion.div
      className="absolute cursor-grab"
      style={{ x, y, rotateX, rotateY }}
      drag
      dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
      dragElastic={0.6}
      whileTap={{ cursor: 'grabbing' }}
      onDragEnd={handleDragEnd}
    >
      {children}
    </motion.div>
  );
}

interface StackProps {
  randomRotation?: boolean;
  sensitivity?: number;
  sendToBackOnClick?: boolean;
  cardsData?: { id: number; img: string }[];
  className?: string;
  style?: React.CSSProperties;
  // اختياري: نسبة العرض/الارتفاع القياسية للكارت
  aspectRatio?: `${number} / ${number}`;
  // اختياري: أقصى عرض للكارت بالبكسل
  maxCardWidth?: number;
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardsData = [],
  sendToBackOnClick = false,
  className = '',
  style = {},
  aspectRatio = '16 / 9',
  maxCardWidth = 640, // 640px كحد أقصى لتفاصيل واضحة بدون مبالغة
}: StackProps) {
  const [cards, setCards] = useState(cardsData);
  const containerRef = useRef<HTMLDivElement>(null);

  // إبقاء ترتيب الكروت وتدوير شبه ثابت مبني على id (بدون Math.random في كل render)
  const rotationForId = useMemo(() => {
    const map = new Map<number, number>();
    cards.forEach(({ id }, i) => {
      // معادلة بسيطة تعطي قيمة ثابتة لكل id في حدود -5 إلى 5
      const val = (((id * 931) % 11) - 5);
      map.set(id, val);
    });
    return map;
  }, [cards]);

  const sendToBack = (id: number) => {
    setCards(prev => {
      const newCards = [...prev];
      const index = newCards.findIndex(card => card.id === id);
      if (index < 0) return prev;
      const [card] = newCards.splice(index, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  // قياس حجم الـ container لتحديد أقصى ارتفاع للكارت ديناميكيًا
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new ResizeObserver(([entry]) => {
      const cr = entry.contentRect;
      setContainerSize({ w: cr.width, h: cr.height });
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // نحافظ إن الكارت لا يتجاوز 85% من ارتفاع الـ container
  const maxCardHeight = Math.floor(containerSize.h * 0.85);
  const effectiveMaxWidth = Math.min(maxCardWidth, Math.floor(containerSize.w * 0.9));

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full flex items-center justify-center ${className}`}
      style={{ perspective: 1000, ...style }}
    >
      {cards.map((card, index) => {
        const baseRotate = randomRotation ? (rotationForId.get(card.id) ?? 0) : 0;

        // ترتيب وتدرج الحجم
        const rotateZ = (cards.length - index - 1) * 4 + baseRotate;
        const scale = 1 + index * 0.06 - cards.length * 0.06;

        return (
          <CardRotate key={card.id} onSendToBack={() => sendToBack(card.id)} sensitivity={sensitivity}>
            <motion.div
              className="rounded-xl border-4 border-white shadow-xl bg-gray-100 will-change-transform"
              onClick={() => sendToBackOnClick && sendToBack(card.id)}
              animate={{ rotateZ, scale, transformOrigin: 'center center' }}
              transition={{ type: 'spring', stiffness: 260, damping: 22 }}
              // الكارت نفسه: نسبة ثابتة + حدود أقصى عرض وارتفاع ديناميكيين
              style={{
                aspectRatio,                       // نسبة العرض/الارتفاع القياسية
                width: '100%',
                maxWidth: `${effectiveMaxWidth}px`,// أقصى عرض
                maxHeight: `${maxCardHeight}px`,   // أقصى ارتفاع حسب الـ container
                backgroundImage: `url(${card.img})`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundColor: '#f3f4f6',
                // افتراضي: احتفاظ بالصورة كاملة
                backgroundSize: 'contain',
              }}
            />
          </CardRotate>
        );
      })}
    </div>
  );
}
