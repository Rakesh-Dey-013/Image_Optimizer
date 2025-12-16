import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FiUpload, FiImage, FiX } from 'react-icons/fi';
import { useImage } from '../context/ImageContext';

export default function UploadArea() {
  const { setOriginalImage } = useImage();
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setError(null);
    const file = acceptedFiles[0];
    
    if (!file.type.match('image.*')) {
      setError('Please upload an image file (JPEG, PNG, GIF, etc.)');
      return;
    }
    
    if (file.size > 10 * 1024 * 1024) { // 10MB limit
      setError('File size exceeds 10MB limit');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = () => {
      setPreview(reader.result);
      setOriginalImage(file);
    };
    reader.readAsDataURL(file);
  }, [setOriginalImage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    },
    maxFiles: 1
  });

  const clearImage = () => {
    setPreview(null);
    setOriginalImage(null);
  };

  return (
    <div className="bg-zinc-800 rounded-xl p-6 border border-zinc-700">
      <div 
        {...getRootProps()} 
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all 
          ${isDragActive ? 'border-cyan-500 bg-zinc-700/50' : 'border-zinc-600 hover:border-zinc-500'}`}
      >
        <input {...getInputProps()} />
        
        {preview ? (
          <div className="relative">
            <img 
              src={preview} 
              alt="Preview" 
              className="max-h-64 mx-auto rounded-lg mb-4"
            />
            <button
              onClick={(e) => {
                e.stopPropagation();
                clearImage();
              }}
              className="absolute top-2 right-2 bg-zinc-900/80 rounded-full p-2 text-gray-300 hover:text-white"
            >
              <FiX size={20} />
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-zinc-700 rounded-full">
                {isDragActive ? (
                  <FiUpload size={32} className="text-cyan-500" />
                ) : (
                  <FiImage size={32} className="text-purple-500" />
                )}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-200 mb-2">
              {isDragActive ? 'Drop your image here' : 'Drag & drop your image here'}
            </h3>
            <p className="text-gray-400 mb-4">or click to browse files</p>
            <p className="text-sm text-gray-500">Supports: JPEG, PNG, GIF, WEBP (Max 10MB)</p>
          </>
        )}
      </div>
      
      {error && (
        <div className="mt-4 text-red-400 text-sm">{error}</div>
      )}
    </div>
  );
}