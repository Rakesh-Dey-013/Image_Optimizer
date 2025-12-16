import { motion } from 'framer-motion';
import { useImage } from '../context/ImageContext';

export default function ImageComparison() {
  const { originalImage, compressedImage, originalSize, compressedSize, compressionRatio } = useImage();
  
  if (!originalImage || !compressedImage) {
    return null;
  }

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i]);
  };

  return (
    <motion.div 
      className="bg-zinc-800 rounded-xl p-6 border border-zinc-700 mt-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold text-gray-200 mb-6">Comparison</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="text-center">
          <div className="relative">
            <img 
              src={URL.createObjectURL(originalImage)} 
              alt="Original" 
              className="rounded-lg w-full h-auto max-h-80 object-contain mx-auto"
            />
            <div className="absolute top-2 left-2 bg-red-500/90 text-white text-xs px-2 py-1 rounded">
              Original
            </div>
          </div>
          <div className="mt-3 text-gray-300">
            <p>Size: {formatBytes(originalSize)}</p>
            <p>Dimensions: {originalImage.width} × {originalImage.height}</p>
          </div>
        </div>
        
        <div className="text-center">
          <div className="relative">
            <img 
              src={URL.createObjectURL(compressedImage)} 
              alt="Compressed" 
              className="rounded-lg w-full h-auto max-h-80 object-contain mx-auto"
            />
            <div className="absolute top-2 left-2 bg-green-500/90 text-white text-xs px-2 py-1 rounded">
              Compressed
            </div>
          </div>
          <div className="mt-3 text-gray-300">
            <p>Size: {formatBytes(compressedSize)}</p>
            <p>Saved: {compressionRatio}%</p>
            <p className={`font-bold ${compressionRatio > 50 ? 'text-green-400' : 'text-cyan-400'}`}>
              {compressionRatio > 50 ? 'Excellent compression!' : 'Good compression'}
            </p>
          </div>
        </div>
      </div>
      
      <div className="mt-6 flex justify-center">
        <a 
          href={URL.createObjectURL(compressedImage)}
          download={originalImage.name.replace(/\.[^/.]+$/, '') + '-compressed.jpg'}
          className="px-6 py-2 bg-gradient-to-r from-green-500 to-cyan-500 text-white font-bold rounded-lg hover:shadow-lg hover:shadow-green-500/20 transition-all"
        >
          Download Compressed Image
        </a>
      </div>
    </motion.div>
  );
}