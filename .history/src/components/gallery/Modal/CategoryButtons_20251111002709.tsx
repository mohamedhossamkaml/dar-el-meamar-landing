import React from 'react';

interface Props {
  category: 'exterior' | 'entrance' | 'sales';
  setCategory: (c: 'exterior' | 'entrance' | 'sales') => void;
  setCurrentIndex: (i: number) => void;
  t: any;
}

const CategoryButtons: React.FC<Props> = ({ category, setCategory, setCurrentIndex, t }) => (
  <div className="flex gap-2 mb-4">
    <button
      onClick={() => { setCategory('exterior'); setCurrentIndex(0); }}
      className={`px-3 py-1 rounded ${category === 'exterior' ? 'bg-teal-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
    >
      {t.galleryPage.modal.exterior || 'Exterior shots'}
    </button>
    <button
      onClick={() => { setCategory('entrance'); setCurrentIndex(0); }}
      className={`px-3 py-1 rounded ${category === 'entrance' ? 'bg-teal-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
    >
      {t.galleryPage.modal.entrance || 'Entrance'}
    </button>
    <button
      onClick={() => { setCategory('sales'); setCurrentIndex(0); }}
      className={`px-3 py-1 rounded ${category === 'sales' ? 'bg-teal-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
    >
      {t.galleryPage.modal.sales || 'Sales plans'}
    </button>
  </div>
);

export default CategoryButtons;
