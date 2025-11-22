import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import StatsGrid from '../StatsGrid';

const GalleryStats: React.FC = () => {
  const { t } = useLanguage();

  // stats جايه كـ object من ملف الترجمة
  const statsObj = t?.galleryPage?.stats ?? {};

  // نحول الـ object لـ Array علشان نقدر نعمل map
  const stats = Object.values(statsObj);

  const gridStats = stats.map((s: any) => ({
    value: String(s.number ?? s.value ?? ''),
    suffix: s.suffix ?? '',
    label: s.label ?? s.name ?? '',
  }));

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* لو مش محتاج الجزء ده احذفه */}
        <div className="w-full h-px bg-red-900 mb-10">
          <p className="text-center text-3xl text-red-900 font-bold">Hide or delete</p>
        </div>

        {/* عرض الـ StatsGrid */}
        <StatsGrid stats={gridStats} />
      </div>
    </section>
  );
};

export default GalleryStats;
