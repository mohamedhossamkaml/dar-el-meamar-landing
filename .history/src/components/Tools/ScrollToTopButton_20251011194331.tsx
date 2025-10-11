import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';

/*************  ✨ Windsurf Command 🌟  *************/
/**
 * A button that scrolls the page to the top when clicked.
 *
 * @returns {JSX.Element} A JSX element representing the button.
 */
const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    /**
     * Toggles the visibility of the button based on the scroll position.
     */
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    // Add the event listener to the window
    window.addEventListener('scroll', toggleVisibility);

    // Remove the event listener when the component is unmounted
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  /**
   * Scrolls the page to the top.
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-all duration-300
        ${visible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
        bg-white dark:bg-gray-800 text-teal-600 dark:text-teal-400 hover:bg-teal-100 dark:hover:bg-gray-700`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
};
/*******  38ac9680-1599-4f53-8638-e831cf89e038  *******/

export default ScrollToTopButton;
