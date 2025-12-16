import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';
import { ImageProvider } from './context/ImageContext';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import UploadArea from './components/UploadArea';
import CompressionControls from './components/CompressionControls';
import ImageComparison from './components/ImageComparison';
import Home from './pages/Home';
import Features from './pages/Features';
import HowItWorks from './components/HowItWorks';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <ImageProvider>

      <div className="min-h-screen bg-zinc-900 text-gray-300">

        {/* Navbar */}
        <Navbar />

        <main>
          {/* Hero/Home Section */}
          <Home />



          {/* Upload & Optimization Section */}
          <section id="upload" className="py-16 px-4">
            <div className="container mx-auto">
              <motion.h2
                className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-500 to-violet-800 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Optimize Your Image
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <UploadArea />
                </div>
                <div>
                  <CompressionControls />
                </div>
              </div>

              <ImageComparison />
            </div>
          </section>

          {/* How It Works Section */}
          <HowItWorks />

          {/* Features Section */}
          <Features />
        </main>

        {/* Footer */}
        <Footer />

        {/* Toast Notification */}
        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </ImageProvider>
  );
}
