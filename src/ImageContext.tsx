import React, { createContext, useContext, ReactNode, ReactElement, useState } from 'react';

// Define the type for the image context
type ImageContextType = {
  selectedImage: File | null;
  setSelectedImage: (image: File | null) => void;
};

// Create the context
const ImageContext = createContext<ImageContextType | undefined>(undefined);

// Create a custom hook to access the context
export function useImageContext() {
  const context = useContext(ImageContext);
  if (!context) {
    throw new Error('useImageContext must be used within an ImageProvider');
  }
  return context;
}

export function ImageProvider({ children }: { children: ReactNode }): ReactElement {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  return (
    <ImageContext.Provider value={{ selectedImage, setSelectedImage }}>
      {children}
    </ImageContext.Provider>
  );
}
