import React from 'react';

interface Props {
  category: 'exterior' | 'entrance' | 'sales';
  setCategory: (c: 'exterior' | 'entrance' | 'sales') => void;
  setCurrentIndex: (i: number) => void;
  label: string;
}

const CategoryButtons: React.FC<Props> = ({ category, setCategory, setCurrentIndex, label }) => (
  <div className="flex gap-2 mb-4">
    <button
      onClick={() => { setCategory('exterior'); setCurrentIndex(0); }}
      className={`px-3 py-1 rounded ${category === 'exterior' ? 'bg-teal-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
    >
      Exterior shots
      {label}
    </button>
    <button
      onClick={() => { setCategory('entrance'); setCurrentIndex(0); }}
      className={`px-3 py-1 rounded ${category === 'entrance' ? 'bg-teal-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
    >
      Entrance
      {label}
    </button>
    <button
      onClick={() => { setCategory('sales'); setCurrentIndex(0); }}
      className={`px-3 py-1 rounded ${category === 'sales' ? 'bg-teal-600 text-white' : 'bg-gray-200 dark:bg-gray-700'}`}
    >
      Sales plans
      {label}
    </button>
  </div>
);

export default CategoryButtons;
