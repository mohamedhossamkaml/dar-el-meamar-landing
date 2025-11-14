// src/types/gallery.ts
export interface ProjectRaw {
  id?: number;
  title?: string;
  description?: string;
  category?: string;
  // أي حقول أخرى من الترجمة الأصلية
}

export interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  src: string;      // صورة من GALLERY_IMAGES
  image: string;     // صورة رئيسية من PROJECTS_EXTRA أو src
  images: string[];  // صور تفصيلية
  color: string;
  raw?: ProjectRaw | null;
}
