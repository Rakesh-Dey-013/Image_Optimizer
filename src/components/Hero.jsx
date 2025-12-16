import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative bg-zinc-900 overflow-hidden" id='home'>
      {/* spot light */}
      <div className="absolute top-0 left-2/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full filter blur-3xl opacity-20"></div>
      
      <div className="relative container mx-auto px-4 py-20 md:py-32 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-violet-700 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Smart Image Compression Made Simple
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Optimize your images without losing quality. Faster websites, smaller files, happier users.
        </motion.p>
        
        <motion.a
          href="#upload"
          className="inline-block px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Compressing
        </motion.a>

      </div>
            <div className="absolute top-10 left-0 transform -translate-x-1/2 -translate-y-0/2 w-96 h-96 bg-emerald-600 rounded-full filter blur-3xl opacity-20"></div>
    </section>
  );
}