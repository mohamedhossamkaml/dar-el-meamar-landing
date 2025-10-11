const Works = () => {
  const stats = [
    { value: '250+', label: 'Completed Projects' },
    { value: '15+', label: 'Years Experience' },
    { value: '500+', label: 'Happy Clients' },
    { value: '100%', label: 'Satisfaction Rate' },
  ];

  return (
    <section id="works" className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Works</h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Delivering excellence across diverse construction projects
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <p className="text-5xl font-bold">{stat.value}</p>
              <p className="text-teal-100 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
