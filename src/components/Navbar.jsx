import { motion } from 'framer-motion';
import { FaHornbill } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <FaHornbill className="text-2xl rotate text-emerald-400" />
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-700 bg-clip-text text-transparent font-chakra">
            ImageOptimo
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-10">
          {['Home', 'Features', 'How It Works'].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-gray-300 hover:text-emerald-400 transition duration-300 ease-in-out font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Menu Icon (for later use) */}
        <button className="md:hidden text-gray-300">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
}
