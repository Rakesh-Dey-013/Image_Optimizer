import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FaHornbill } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-8 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center space-x-2">
                        <FaHornbill className='text-2xl rotate text-emerald-400' />
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-violet-700 bg-clip-text text-transparent">
                ImageOptimo
              </span>
            </div>
            <p className="text-gray-400 text-sm mt-2">
              © {currentYear} ImageOptimo. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com/Rakesh-Dey-013" target='_blank' className="text-gray-400 hover:text-white transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://x.com/RD_Gaming796974" target='_blank' className="text-gray-400 hover:text-white transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="https://www.linkedin.com/in/rakeshdey007/" target='_blank' className="text-gray-400 hover:text-white transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="https://www.instagram.com/rakesh._._007" target='_blank' className="text-gray-400 hover:text-white transition-colors">
              <FaInstagram  size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-zinc-800 flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-300">Terms of Service</a>
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>
      </div>
    </footer>
  );
}