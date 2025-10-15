import { Building2 } from 'lucide-react';

const About = () => {
  const cards = [
    {
      title: 'Our Vision',
      description:
        'To be the leading construction company, setting new standards in quality, innovation, and customer satisfaction across the region.',
    },
    {
      title: 'Our Mission',
      description:
        'Delivering exceptional construction projects that exceed expectations through expertise, dedication, and attention to every detail.',
    },
    {
      title: 'Our Values',
      description:
        'Integrity, quality craftsmanship, innovation, and building lasting relationships with our clients and community.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Dar El-Meamar</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A legacy of construction excellence and architectural innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="bg-teal-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <Building2 size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
