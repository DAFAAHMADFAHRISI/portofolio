import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react'; // Importing icons
import emailjs from 'emailjs-com';

// Ganti dengan Service ID dan Template ID dari dashboard EmailJS kamu
const SERVICE_ID = 'YOUR_SERVICE_ID';
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const USER_ID = 'pQ46wwtQl0STV97v-'; // Public Key dari EmailJS

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target as HTMLFormElement, USER_ID)
      .then(() => {
        alert('Thank you for your message! I will get back to you soon.');
        (e.target as HTMLFormElement).reset();
      }, (error) => {
        alert('Failed to send message: ' + error.text);
      });
  };

  // Animation variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const formInputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <div className="min-h-screen w-screen bg-gradient-to-br from-mustard-seed to-true-blue py-16 px-4 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          className="text-5xl font-extrabold text-center mb-16 text-true-blue tracking-tight"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Get in <span className="text-mustard-seed">Touch</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-mustard-seed p-8 sm:p-12 rounded-xl shadow-lg border border-true-blue">
          {/* Contact Information Section */}
          <motion.div
            className="md:border-r md:pr-12 border-true-blue" // Adds a subtle divider on larger screens
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-bold mb-6 text-true-blue flex items-center border-b-2 border-mustard-seed pb-3">
              Reach Out
            </h2>
            <p className="text-lg text-true-blue mb-10 leading-relaxed">
              I'm always excited to discuss new projects, innovative ideas, or potential collaborations.
              Feel free to send a message, and I'll get back to you as soon as possible.
            </p>

            <div className="space-y-6">
              <motion.div className="flex items-center" variants={itemVariants}>
                <Mail className="w-8 h-8 text-true-blue mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-true-blue">Email Address</h3>
                  <a
                    href="mailto:dafamangku@gmail.com"
                    className="text-true-blue hover:text-white text-lg transition-colors duration-200"
                  >
                    dafamangku@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-center" variants={itemVariants}>
                <Phone className="w-8 h-8 text-true-blue mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-true-blue">Phone Number</h3>
                  <a
                    href="tel:+6281234567890"
                    className="text-true-blue hover:text-white text-lg transition-colors duration-200"
                  >
                    +62 812-3456-7890
                  </a>
                </div>
              </motion.div>

              <motion.div className="flex items-center" variants={itemVariants}>
                <MapPin className="w-8 h-8 text-true-blue mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-true-blue">Location</h3>
                  <p className="text-true-blue text-lg">Jakarta, Indonesia</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionVariants}
          >
            <h2 className="text-3xl font-bold mb-6 text-true-blue flex items-center border-b-2 border-mustard-seed pb-3">
              Send Me a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={formInputVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-true-blue mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-true-blue focus:border-true-blue text-gray-900 placeholder-gray-400"
                  placeholder="Your Name"
                  required
                />
              </motion.div>

              <motion.div variants={formInputVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-true-blue mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-true-blue focus:border-true-blue text-gray-900 placeholder-gray-400"
                  placeholder="your.email@example.com"
                  required
                />
              </motion.div>

              <motion.div variants={formInputVariants}>
                <label htmlFor="subject" className="block text-sm font-medium text-true-blue mb-1">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-true-blue focus:border-true-blue text-gray-900 placeholder-gray-400"
                  placeholder="Project Inquiry, Collaboration, etc."
                />
              </motion.div>

              <motion.div variants={formInputVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-true-blue mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-true-blue focus:border-true-blue text-gray-900 placeholder-gray-400"
                  placeholder="Tell me about your project or inquiry..."
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full inline-flex items-center justify-center bg-true-blue text-white px-6 py-3 rounded-md font-bold text-lg shadow-md hover:bg-mustard-seed transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-true-blue transform hover:scale-105"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <Send className="ml-3 h-5 w-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;