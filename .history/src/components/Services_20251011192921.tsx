import { Building2 } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Residential Construction',
      desc: 'Building dream homes with precision and care',
    },
    {
      title: 'Commercial Projects',
      desc: 'Creating functional and impressive business spaces',
    },
    {
      title: 'Renovations & Remodeling',
      desc: 'Transforming existing spaces into modern masterpieces',
    },
    {
      title: 'Project Management',
      desc: 'End-to-end construction project oversight',
    },
    {
      title: 'Architectural Design',
      desc: 'Innovative designs that bring visions to life',
    },
    {
      title: 'Consultation Services',
      desc: 'Expert guidance for your construction journey',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100"
            >
              <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <Building2 size={28} className="text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
