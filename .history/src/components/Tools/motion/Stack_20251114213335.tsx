// Stack.tsx
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

interface Card {
  id: number;
  img: string;
}

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

  function handleDragEnd(_: any, info: { offset: { x: number; y: number } }) {
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
  cardDimensions?: { width: number; height: number }; // أقصى أبعاد للكارت
  cardsData?: Card[];
  sendToBackOnClick?: boolean;
  animationConfig?: { stiffness?: number; damping?: number };
  className?: string;
  aspectRatio?: string; // مثال "16 / 9"
}

export default function Stack({
  randomRotation = false,
  sensitivity = 200,
  cardDimensions = { width: 500, height: 340 },
  cardsData = [],
  sendToBackOnClick = false,
  animationConfig = { stiffness: 260, damping: 22 },
  className = '',
  aspectRatio,
}: StackProps) {
  const [cards, setCards] = useState<Card[]>(cardsData);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [containerSize, setContainerSize] = useState({ w: 0, h: 0 });

  // Map ثابت للتدوير المبني على id (تجنب Math.random في كل render)
  const rotationForId = useMemo(() => {
    const map = new Map<number, number>();
    cards.forEach(({ id }) => {
      map.set(id, (((id * 997) % 11) - 5)); // قيمة في -5..5
    });
    return map;
  }, [cards]);

  // ResizeObserver لقياس الحاوية
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new ResizeObserver(entries => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setContainerSize({ w: Math.round(width), h: Math.round(height) });
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // حساب أبعاد الكارت الفعلية بناءً على حجم الـ container مع احترام cardDimensions
  const computedCardSize = useMemo(() => {
    if (!containerSize.w || !containerSize.h) {
      return { width: cardDimensions.width, height: cardDimensions.height };
    }

    // نستخدم النسبة المطلوبة إذا مررتها
    if (aspectRatio) {
      // aspectRatio كمثال "16 / 9"
      const [aw, ah] = aspectRatio.split('/').map(s => Number(s.trim()));
      if (aw > 0 && ah > 0) {
        // نحاول أن يكون الكارت ضمن 85% من ارتفاع الـ container و 90% من العرض
        const maxH = Math.floor(containerSize.h * 0.85);
        const maxW = Math.floor(containerSize.w * 0.9);
        // حساب عرض بناءً على النسبة والقيود
        let h = Math.min(maxH, cardDimensions.height);
        let w = Math.round((aw / ah) * h);
        if (w > maxW) {
          w = maxW;
          h = Math.round((ah / aw) * w);
        }
        // لا يتجاوز القيود العامة
        w = Math.min(w, cardDimensions.width);
        h = Math.min(h, cardDimensions.height);
        return { width: w, height: h };
      }
    }

    // إذا مفيش aspectRatio نلائم الكارت داخل الـ container
    const maxAllowedW = Math.min(cardDimensions.width, Math.floor(containerSize.w * 0.9));
    const maxAllowedH = Math.min(cardDimensions.height, Math.floor(containerSize.h * 0.85));

    // نحافظ على أكبر حجم ممكن وفق القيود
    // نستخدم نسبة افتراضية مبنية على cardDimensions
    const ratio = cardDimensions.width / cardDimensions.height || 1;
    let width = maxAllowedW;
    let height = Math.round(width / ratio);

    if (height > maxAllowedH) {
      height = maxAllowedH;
      width = Math.round(height * ratio);
    }

    return { width, height };
  }, [containerSize, cardDimensions, aspectRatio]);

  useEffect(() => {
    // لو props.cardsData تغيرت، نحدث الحالة
    setCards(cardsData);
  }, [cardsData]);

  const sendToBack = (id: number) => {
    setCards(prev => {
      const newCards = [...prev];
      const idx = newCards.findIndex(c => c.id === id);
      if (idx === -1) return prev;
      const [card] = newCards.splice(idx, 1);
      newCards.unshift(card);
      return newCards;
    });
  };

  // Helper: يكتشف أبعاد الصورة ويقرر contain vs cover (بسيط وغير مزعج)
  const decideBackgroundSize = async (src: string) => {
    return new Promise<'contain' | 'cover'>(resolve => {
      const img = new Image();
      img.onload = () => {
        const isPortrait = img.naturalHeight > img