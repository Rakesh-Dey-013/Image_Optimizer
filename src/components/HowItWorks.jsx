import { motion } from 'framer-motion';

const steps = [
  {
    title: "Upload Your Image",
    description: "Drag and drop your image file or click to browse your device",
    icon: "📁"
  },
  {
    title: "Adjust Settings",
    description: "Choose compression type and quality level to suit your needs",
    icon: "⚙️"
  },
  {
    title: "Preview & Compare",
    description: "See side-by-side comparison with file size savings",
    icon: "👀"
  },
  {
    title: "Download Result",
    description: "Get your optimized image with a single click",
    icon: "⬇️"
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 px-4 bg-zinc-900">
      <div className="container mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          How It Works
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
                      <div className="absolute top-[160vh] left-0/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-700 rounded-full filter blur-3xl opacity-20"></div>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-r from-zinc-900/70 to-violet-800/10 p-6 rounded-xl border border-emerald-800/70"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-4xl mb-4">{step.icon}</div>
              <h3 className="text-xl font-bold text-gray-200 mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}