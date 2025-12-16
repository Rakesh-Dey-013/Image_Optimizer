import { createContext, useContext, useState } from 'react';
import imageCompression from 'browser-image-compression';

const ImageContext = createContext();

export function ImageProvider({ children }) {
  const [originalImage, setOriginalImage] = useState(null);
  const [compressedImage, setCompressedImage] = useState(null);
  const [originalSize, setOriginalSize] = useState(0);
  const [compressedSize, setCompressedSize] = useState(0);
  const [compressionRatio, setCompressionRatio] = useState(0);
  const [compressionType, setCompressionType] = useState('lossy');
  const [quality, setQuality] = useState(80);
  const [autoRename, setAutoRename] = useState(true);
  
  const compressImage = async () => {
    if (!originalImage) return;
    
    try {
      const options = {
        maxSizeMB: compressionType === 'lossless' ? 1 : quality / 100,
        maxWidthOrHeight: compressionType === 'lossless' ? undefined : 1920,
        useWebWorker: true,
        initialQuality: quality / 100,
      };
      
      const compressedFile = await imageCompression(originalImage, options);
      
      setCompressedImage(compressedFile);
      setOriginalSize(originalImage.size);
      setCompressedSize(compressedFile.size);
      setCompressionRatio(
        Math.round(((originalImage.size - compressedFile.size) / originalImage.size) * 100)
      );
      
      return compressedFile;
    } catch (error) {
      console.error('Compression error:', error);
      throw error;
    }
  };
  
  return (
    <ImageContext.Provider
      value={{
        originalImage,
        setOriginalImage,
        compressedImage,
        setCompressedImage,
        originalSize,
        compressedSize,
        compressionRatio,
        compressionType,
        setCompressionType,
        quality,
        setQuality,
        autoRename,
        setAutoRename,
        compressImage
      }}
    >
      {children}
    </ImageContext.Provider>
  );
}

export const useImage = () => useContext(ImageContext);