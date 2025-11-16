// src/hooks/useLightbox.ts
import { useState, useCallback } from 'react';

const useLightbox = () => {
  const [open, setOpen] = useState(false);
  const [src, setSrc] = useState<string | null>(null);
  const [imgs, setImgs] = useState<string[]>([]);
  const [index, setIndex] = useState(0);

  const openLightbox = useCallback((src: string, sectionImgs: string[] = []) => {
    setSrc(src);
    setImgs(sectionImgs.length ? sectionImgs : [src]);
    setIndex(sectionImgs.length ? sectionImgs.indexOf(src) : 0);
    setOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setOpen(false);
    setSrc(null);
    setImgs([]);
    setIndex(0);
  }, []);

  const showPrev = useCallback(() => {
    setIndex((i) => {
      const next = (i - 1 + imgs.length) % imgs.length;
      setSrc(imgs[next]);
      return next;
    });
  }, [imgs]);

  const showNext = useCallback(() => {
    setIndex((i) => {
      const next = (i + 1) % imgs.length;
      setSrc(imgs[next]);
      return next;
    });
  }, [imgs]);

  return { openLightbox, closeLightbox, showPrev, showNext, lightboxState: { open, src, imgs, index } };
};

export default useLightbox;
