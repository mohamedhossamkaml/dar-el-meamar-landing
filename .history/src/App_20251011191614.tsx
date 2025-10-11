import { useState, useEffect } from 'react';
import { Building2, Mail, Phone, MapPin, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    // <div className="min-h-screen bg-white">
    //   <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    //     isScrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
    //   }`}>
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="flex justify-between items-center h-32">
    //         <div className="flex items-center">
    //           <img
    //             src="/دار المعمار.png"
    //             alt="Dar El-Meamar"
    //             className="h-28 w-auto"
    //           />
    //         </div>

    //         <div className="hidden md:flex items-center space-x-8">
    //           <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Home</button>
    //           <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">About Us</button>
    //           <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Services</button>
    //           <button onClick={() => scrollToSection('gallery')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Gallery</button>
    //           <button onClick={() => scrollToSection('works')} className="text-gray-700 hover:text-teal-600 transition-colors font-medium">Our Works</button>
    //           <button onClick={() => scrollToSection('contact')} className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium">Contact Us</button>
    //         </div>

    //         <button
    //           className="md:hidden text-gray-700"
    //           onClick={() => setIsMenuOpen(!isMenuOpen)}
    //         >
    //           {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
    //         </button>
    //       </div>
    //     </div>

    //     {isMenuOpen && (
    //       <div className="md:hidden bg-white border-t">
    //         <div className="px-4 pt-2 pb-4 space-y-2">
    //           <button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium">Home</button>
    //           <button onClick={() => scrollToSection('about')} className="block w-full text-left py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium">About Us</button>
    //           <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium">Services</button>
    //           <button onClick={() => scrollToSection('gallery')} className="block w-full text-left py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium">Gallery</button>
    //           <button onClick={() => scrollToSection('works')} className="block w-full text-left py-2 text-gray-700 hover:text-teal-600 transition-colors font-medium">Our Works</button>
    //           <button onClick={() => scrollToSection('contact')} className="block w-full text-left py-2 bg-teal-600 text-white px-4 rounded-lg hover:bg-teal-700 transition-colors font-medium mt-2">Contact Us</button>
    //         </div>
    //       </div>
    //     )}
    //   </nav>

    //   <section id="home" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-white to-teal-50">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    //       <div className="grid md:grid-cols-2 gap-12 items-center">
    //         <div className="space-y-8">
    //           <div className="space-y-4">
    //             <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
    //               Building Your <span className="text-teal-600">Dreams</span> Into Reality
    //             </h1>
    //             <p className="text-xl text-gray-600 leading-relaxed">
    //               Dar El-Meamar is your trusted partner in construction excellence. We transform visions into architectural masterpieces.
    //             </p>
    //           </div>
    //           <div className="flex flex-col sm:flex-row gap-4">
    //             <button onClick={() => scrollToSection('contact')} className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all hover:shadow-lg font-medium text-lg">
    //               Start Your Project
    //             </button>
    //             <button onClick={() => scrollToSection('works')} className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg hover:bg-teal-50 transition-all font-medium text-lg">
    //               View Our Work
    //             </button>
    //           </div>
    //         </div>
    //         <div className="relative">
    //           <div className="aspect-square rounded-2xl bg-gradient-to-br from-teal-500 to-teal-700 shadow-2xl flex items-center justify-center">
    //             <Building2 size={200} className="text-white opacity-20" />
    //             <div className="absolute inset-0 flex items-center justify-center">
    //               <div className="text-center text-white space-y-4">
    //                 <Building2 size={80} className="mx-auto" />
    //                 <p className="text-2xl font-bold">Excellence in Construction</p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section id="about" className="py-20 bg-white">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="text-center mb-16">
    //         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Dar El-Meamar</h2>
    //         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    //           A legacy of construction excellence and architectural innovation
    //         </p>
    //       </div>
    //       <div className="grid md:grid-cols-3 gap-8">
    //         <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    //           <div className="bg-teal-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
    //             <Building2 size={32} className="text-white" />
    //           </div>
    //           <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
    //           <p className="text-gray-600 leading-relaxed">
    //             To be the leading construction company, setting new standards in quality, innovation, and customer satisfaction across the region.
    //           </p>
    //         </div>
    //         <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    //           <div className="bg-teal-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
    //             <Building2 size={32} className="text-white" />
    //           </div>
    //           <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
    //           <p className="text-gray-600 leading-relaxed">
    //             Delivering exceptional construction projects that exceed expectations through expertise, dedication, and attention to every detail.
    //           </p>
    //         </div>
    //         <div className="bg-gradient-to-br from-teal-50 to-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
    //           <div className="bg-teal-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
    //             <Building2 size={32} className="text-white" />
    //           </div>
    //           <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
    //           <p className="text-gray-600 leading-relaxed">
    //             Integrity, quality craftsmanship, innovation, and building lasting relationships with our clients and community.
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section id="services" className="py-20 bg-gradient-to-br from-slate-50 to-white">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="text-center mb-16">
    //         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h2>
    //         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    //           Comprehensive construction solutions tailored to your needs
    //         </p>
    //       </div>
    //       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
    //         {[
    //           { title: 'Residential Construction', desc: 'Building dream homes with precision and care' },
    //           { title: 'Commercial Projects', desc: 'Creating functional and impressive business spaces' },
    //           { title: 'Renovations & Remodeling', desc: 'Transforming existing spaces into modern masterpieces' },
    //           { title: 'Project Management', desc: 'End-to-end construction project oversight' },
    //           { title: 'Architectural Design', desc: 'Innovative designs that bring visions to life' },
    //           { title: 'Consultation Services', desc: 'Expert guidance for your construction journey' }
    //         ].map((service, idx) => (
    //           <div key={idx} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100">
    //             <div className="bg-teal-100 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
    //               <Building2 size={28} className="text-teal-600" />
    //             </div>
    //             <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
    //             <p className="text-gray-600 leading-relaxed">{service.desc}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>

    //   <section id="gallery" className="py-20 bg-white">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="text-center mb-16">
    //         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Project Gallery</h2>
    //         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    //           A showcase of our finest construction achievements
    //         </p>
    //       </div>
    //       <div className="grid md:grid-cols-3 gap-6">
    //         {[1, 2, 3, 4, 5, 6].map((item) => (
    //           <div key={item} className="aspect-square bg-gradient-to-br from-teal-100 to-teal-200 rounded-xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 flex items-center justify-center overflow-hidden group">
    //             <div className="text-center text-teal-700 group-hover:scale-110 transition-transform">
    //               <Building2 size={64} className="mx-auto mb-4" />
    //               <p className="font-semibold text-lg">Project {item}</p>
    //             </div>
    //           </div>
    //         ))}
    //       </div>
    //     </div>
    //   </section>

    //   <section id="works" className="py-20 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="text-center mb-16">
    //         <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Works</h2>
    //         <p className="text-xl text-teal-100 max-w-3xl mx-auto">
    //           Delivering excellence across diverse construction projects
    //         </p>
    //       </div>
    //       <div className="grid md:grid-cols-4 gap-8 text-center">
    //         <div className="space-y-2">
    //           <p className="text-5xl font-bold">250+</p>
    //           <p className="text-teal-100 text-lg">Completed Projects</p>
    //         </div>
    //         <div className="space-y-2">
    //           <p className="text-5xl font-bold">15+</p>
    //           <p className="text-teal-100 text-lg">Years Experience</p>
    //         </div>
    //         <div className="space-y-2">
    //           <p className="text-5xl font-bold">500+</p>
    //           <p className="text-teal-100 text-lg">Happy Clients</p>
    //         </div>
    //         <div className="space-y-2">
    //           <p className="text-5xl font-bold">100%</p>
    //           <p className="text-teal-100 text-lg">Satisfaction Rate</p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   <section id="contact" className="py-20 bg-white">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="text-center mb-16">
    //         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
    //         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
    //           Let's discuss your next construction project
    //         </p>
    //       </div>
    //       <div className="grid md:grid-cols-2 gap-12">
    //         <div className="space-y-8">
    //           <div className="flex items-start space-x-4">
    //             <div className="bg-teal-100 p-3 rounded-lg">
    //               <Phone className="text-teal-600" size={24} />
    //             </div>
    //             <div>
    //               <h3 className="font-bold text-gray-900 text-lg mb-1">Phone</h3>
    //               <p className="text-gray-600">+966 XX XXX XXXX</p>
    //             </div>
    //           </div>
    //           <div className="flex items-start space-x-4">
    //             <div className="bg-teal-100 p-3 rounded-lg">
    //               <Mail className="text-teal-600" size={24} />
    //             </div>
    //             <div>
    //               <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
    //               <p className="text-gray-600">info@darelmeamar.com</p>
    //             </div>
    //           </div>
    //           <div className="flex items-start space-x-4">
    //             <div className="bg-teal-100 p-3 rounded-lg">
    //               <MapPin className="text-teal-600" size={24} />
    //             </div>
    //             <div>
    //               <h3 className="font-bold text-gray-900 text-lg mb-1">Location</h3>
    //               <p className="text-gray-600">Saudi Arabia</p>
    //             </div>
    //           </div>
    //         </div>
    //         <form className="space-y-6">
    //           <div>
    //             <input
    //               type="text"
    //               placeholder="Your Name"
    //               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 transition-colors"
    //             />
    //           </div>
    //           <div>
    //             <input
    //               type="email"
    //               placeholder="Your Email"
    //               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 transition-colors"
    //             />
    //           </div>
    //           <div>
    //             <textarea
    //               placeholder="Your Message"
    //               rows={5}
    //               className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal-600 transition-colors resize-none"
    //             ></textarea>
    //           </div>
    //           <button type="submit" className="w-full bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-medium text-lg">
    //             Send Message
    //           </button>
    //         </form>
    //       </div>
    //     </div>
    //   </section>

    //   <footer className="bg-gray-900 text-white py-12">
    //     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="text-center space-y-4">
    //         <img
    //           src="/دار المعمار.png"
    //           alt="Dar El-Meamar"
    //           className="h-16 w-auto mx-auto"
    //         />
    //         <p className="text-gray-400">Building excellence, one project at a time</p>
    //         <p className="text-gray-500 text-sm">&copy; 2025 Dar El-Meamar. All rights reserved.</p>
    //       </div>
    //     </div>
    //   </footer>
    // </div>
  );
}

export default App;
