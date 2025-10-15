// src/components/ScrollToTopButton.tsx
import { ArrowUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 bg-teal-600 text-white p-3 rounded-full shadow-lg hover:bg-teal-700 transition-colors z-50"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};

export default ScrollToTopButton;
