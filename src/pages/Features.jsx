import { motion } from 'framer-motion';

const features = [
  {
    title: "Lightning Fast",
    description: "Optimize images in seconds with our powerful compression engine",
    icon: "⚡"
  },
  {
    title: "Quality Control",
    description: "Adjust compression levels without visible quality loss",
    icon: "🎚️"
  },
  {
    title: "Privacy Focused",
    description: "All processing happens in your browser - no server uploads",
    icon: "🔒"
  },
  {
    title: "Multiple Formats",
    description: "Supports JPG, PNG, GIF, and WEBP formats",
    icon: "🖼️"
  }
];

export default function Features() {
  return (
    <section id="features" className="py-16 px-4 bg-zinc-900">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-violet-700 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Powerful Features
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-zinc-900/70 to-emerald-700/10 p-6 rounded-xl border border-cyan-500/30"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-200 mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}