import { useState, useEffect } from 'react';
import { useImage } from '../context/ImageContext';

export default function CompressionControls() {
  const { 
    compressionType,
    setCompressionType,
    quality,
    setQuality,
    autoRename,
    setAutoRename,
    compressImage
  } = useImage();
  
  const [isCompressing, setIsCompressing] = useState(false);

  const handleCompress = async () => {
    setIsCompressing(true);
    try {
      await compressImage();
    } finally {
      setIsCompressing(false);
    }
  };

  return (
    <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
      <h3 className="text-xl font-bold text-gray-200 mb-6">Compression Settings</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block text-gray-300 mb-2">Compression Type</label>
          <div className="flex space-x-4">
            {['lossy', 'lossless'].map((type) => (
              <button
                key={type}
                onClick={() => setCompressionType(type)}
                className={`px-4 py-2 rounded-lg capitalize ${compressionType === type 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white' 
                  : 'bg-zinc-700 text-gray-300'}`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <label className="block text-gray-300 mb-2">
            Quality: {quality}%
          </label>
          <input
            type="range"
            min="10"
            max="100"
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="w-full h-2 bg-zinc-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
          />
          <div className="flex justify-between text-xs text-gray-400 mt-1">
            <span>Smaller File</span>
            <span>Better Quality</span>
          </div>
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="autoRename"
            checked={autoRename}
            onChange={(e) => setAutoRename(e.target.checked)}
            className="w-4 h-4 text-cyan-600 bg-zinc-700 rounded border-zinc-600 focus:ring-cyan-500"
          />
          <label htmlFor="autoRename" className="ml-2 text-gray-300">
            Auto rename compressed files
          </label>
        </div>
        
        <button
          onClick={handleCompress}
          disabled={isCompressing}
          className={`w-full py-3 px-4 rounded-lg font-bold transition-all ${isCompressing 
            ? 'bg-zinc-700 text-gray-400' 
            : 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:shadow-lg hover:shadow-cyan-500/20'}`}
        >
          {isCompressing ? 'Compressing...' : 'Compress Image'}
        </button>
      </div>
    </div>
  );
}