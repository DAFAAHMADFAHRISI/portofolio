import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react'; // For the mobile menu icon and dark mode icons
import { motion } from 'framer-motion'; // For animations

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu open/close
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize dark mode from localStorage or system preference
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      return JSON.parse(savedMode);
    } else {
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
  });

  useEffect(() => {
    // Apply or remove the 'dark' class based on darkMode state
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode)); // Save preference
  }, [darkMode]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode: boolean) => !prevMode);
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
      className="bg-mustard-seed sticky top-0 z-50 shadow-lg backdrop-blur-sm bg-opacity-90"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20, delay: 0.2 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand Name */}
          <Link
            to="/"
            className="text-black hover:text-black transition-colors duration-300 transform hover:scale-105 text-2xl font-extrabold"
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
                    ? 'text-black border-b-2 border-black pb-1'
                    : 'text-black hover:text-true-blue'
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
                    ? 'text-black border-b-2 border-black pb-1'
                    : 'text-black hover:text-true-blue'
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
                    ? 'text-black border-b-2 border-black pb-1'
                    : 'text-black hover:text-true-blue'
                }`
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-black border-b-2 border-black pb-1'
                    : 'text-black hover:text-true-blue'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-black hover:text-black focus:outline-none focus:ring-2 focus:ring-black rounded-md p-2">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
            </button>
          </div>

          {/* Dark Mode Toggle Button */}
          <div className="hidden md:flex items-center ml-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-black text-black hover:text-black"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun className="h-6 w-6" />
              ) : (
                <Moon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden bg-true-blue shadow-lg pb-4"
          initial="hidden"
          animate="visible"
          exit="exit" // Used by AnimatePresence if wrapped around this component
          variants={menuVariants}
        >
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 flex flex-col items-center">
            <motion.div variants={menuItemVariants}>
              <NavLink
                to="/"
                className="block text-xl font-medium text-black hover:bg-mustard-seed hover:text-true-blue py-2 px-3 rounded-md w-full text-center"
                onClick={toggleMenu}
              >
                Home
              </NavLink>
            </motion.div>
            <motion.div variants={menuItemVariants}>
              <NavLink
                to="/about"
                className="block text-xl font-medium text-black hover:bg-mustard-seed hover:text-true-blue py-2 px-3 rounded-md w-full text-center"
                onClick={toggleMenu}
              >
                About
              </NavLink>
            </motion.div>
            <motion.div variants={menuItemVariants}>
              <NavLink
                to="/portfolio"
                className="block text-xl font-medium text-black hover:bg-mustard-seed hover:text-true-blue py-2 px-3 rounded-md w-full text-center"
                onClick={toggleMenu}
              >
                Portfolio
              </NavLink>
            </motion.div>
            <motion.div variants={menuItemVariants}>
              <NavLink
                to="/contact"
                className="block text-xl font-medium text-black hover:bg-mustard-seed hover:text-true-blue py-2 px-3 rounded-md w-full text-center"
                onClick={toggleMenu}
              >
                Contact
              </NavLink>
            </motion.div>
            {/* Dark Mode Toggle in Mobile Menu */}
            <motion.div variants={menuItemVariants}>
              <button
                onClick={toggleDarkMode}
                className="block text-xl font-medium text-black hover:bg-mustard-seed hover:text-true-blue py-2 px-3 rounded-md w-full text-center"
                aria-label="Toggle dark mode"
              >
                {darkMode ? 'Light Mode' : 'Dark Mode'}
              </button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;