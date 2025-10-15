import { Phone, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss your next construction project
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <Phone className="text-teal-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Phone</h3>
                <p className="text-gray-600">+966 XX XXX XXXX</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <Mail className="text-teal-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
                <p className="text-gray-600">info@darelmeamar.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-teal-100 p-3 rounded-lg">
                <MapPin className="text-teal-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Location</h3>
                <p className="text-gray-600">Cairo, Egypt</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Your Email</label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Tell us about your project"
              />
            </div>

            <button
              type="submit"
              className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
