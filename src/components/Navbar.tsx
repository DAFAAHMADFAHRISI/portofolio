import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // For the mobile menu icon
import { motion } from 'framer-motion'; // For animations

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Framer Motion variants for the mobile menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        when: "beforeChildren",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  // Framer Motion variants for individual mobile menu items
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <motion.nav
      className="bg-white sticky top-0 z-50 shadow-md backdrop-blur-sm bg-opacity-80"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Name */}
          <Link
            to="/"
            className="text-2xl font-extrabold text-indigo-700 hover:text-indigo-900 transition-colors duration-300 transform hover:scale-105"
            onClick={() => setIsOpen(false)} // Close menu on logo click
          >
            Dafa.Portfolio
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1'
                    : 'text-gray-600 hover:text-indigo-600'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1'
                    : 'text-gray-600 hover:text-indigo-600'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1'
                    : 'text-gray-600 hover:text-indigo-600'
                }`
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1'
                    : 'text-gray-600 hover:text-indigo-600'
                }`
              }
            >
              Resume
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-indigo-600 border-b-2 border-indigo-600 pb-1'
                    : 'text-gray-600 hover:text-indigo-600'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg pb-4"
          initial="hidden"
          animate="visible"
          exit="exit" // Used by AnimatePresence if wrapped around this component
          variants={menuVariants}
        >
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 flex flex-col items-center">
            <motion.div variants={menuItemVariants}>
              <NavLink
                to="/"
                className="block text-xl font-medium text-gray-800 hover:bg-indigo-50 hover:text-indigo-700 py-2 px-3 rounded-md w-full text-center"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </motion.div>
            <motion.div variants={menuItemVariants}>
              <NavLink
                to="/about"
                className="block text-xl font-medium text-gray-800 hover:bg-indigo-50 hover:text-indigo-700 py-2 px-3 rounded-md w-full text-center"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </motion.div>
            <motion.div variants={menuItemVariants}>
              <NavLink
                to="/portfolio"
                className="block text-xl font-medium text-gray-800 hover:bg-indigo-50 hover:text-indigo-700 py-2 px-3 rounded-md w-full text-center"
                onClick={toggleMenu}
              >
                Portfolio
              </NavLink>
            </motion.div>
            <motion.div variants={menuItemVariants}>
              <NavLink
                to="/resume"
                className="block text-xl font-medium text-gray-800 hover:bg-indigo-50 hover:text-indigo-700 py-2 px-3 rounded-md w-full text-center"
                onClick={toggleMenu}
              >
                Resume
              </NavLink>
            </motion.div>
            <motion.div variants={menuItemVariants}>
              <NavLink
                to="/contact"
                className="block text-xl font-medium text-gray-800 hover:bg-indigo-50 hover:text-indigo-700 py-2 px-3 rounded-md w-full text-center"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;