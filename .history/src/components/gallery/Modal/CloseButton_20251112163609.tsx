import React from 'react';

interface Props {
  category: 'exterior' | 'entrance' | 'sales';
  setCategory: (c: 'exterior' | 'entrance' | 'sales') => void;
  setCurrentIndex: (i: number) => void;
  onClose: () => void;
  t: any;
}

const CategoryButtons: React.FC<Props> = ({ category, setCategory, setCurrentIndex, t }) => (
  <div className="flex gap-2">
    {['exterior', 'entrance', 'sales'].map((key) => (
      <button
        key={key}
        onClick={() => { setCategory(key as any); setCurrentIndex(0); }}
        className={`px-3 py-1 rounded transition-all duration-300 font-medium
          ${category === key
            ? 'bg-teal-600 text-white shadow-md'
            : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-teal-100 dark:hover:bg-teal-800'}`}
      >
        {t.galleryPage.modal[key] || key}
      </button>
    ))}
  </div>
);

export default CategoryButtons;
