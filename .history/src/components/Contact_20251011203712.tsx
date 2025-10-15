import { Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  scaleIn,
  staggerContainer,
} from '../utils/animations';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-20 bg-white"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Let's discuss your next construction project
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            variants={fadeInLeft}
          >
            <motion.div
              className="flex items-start space-x-4"
              variants={fadeInUp}
            >
              <div className="bg-teal-100 p-3 rounded-lg">
                <Phone className="text-teal-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Phone</h3>
                <p className="text-gray-600">+966 XX XXX XXXX</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              variants={fadeInUp}
            >
              <div className="bg-teal-100 p-3 rounded-lg">
                <Mail className="text-teal-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
                <p className="text-gray-600">info@darelmeamar.com</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-start space-x-4"
              variants={fadeInUp}
            >
              <div className="bg-teal-100 p-3 rounded-lg">
                <MapPin className="text-teal-600" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-1">Location</h3>
                <p className="text-gray-600">Cairo, Egypt</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={fadeInRight}
            className="space-y-6"
          >
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Name</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Email</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">Your Message</label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              ></textarea>
            </div>
            <motion.button
              type="submit"
              variants={scaleIn}
              className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-all hover:shadow-lg font-medium text-lg"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
