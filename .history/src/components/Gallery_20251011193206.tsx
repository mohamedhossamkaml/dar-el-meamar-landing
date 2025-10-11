import { Building2 } from 'lucide-react';

const Gallery = () => {
  const projects = [1, 2, 3, 4, 5, 6];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Project Gallery</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of our finest construction achievements
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((item) => (
            <div
              key={item}
              className="aspect-square bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center overflow-hidden group"
            >
              <div className="text-center text-teal-700 group-hover:scale-110 transition-transform">
                <Building2 size={64} className="mx-auto mb-4" />
                <p className="font-semibold text-lg">Project {item}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
