import { createContext, useState, ReactNode } from "react";

interface PreviewProps {
  children: ReactNode;
}

interface PreviewContext {
  imagePreview: string;
  addImage: (img: string) => void;
  deledImage: () => void;
}

export const PreviewContext = createContext<PreviewContext | undefined>(
  undefined
);

export function PreviewContextProvider({ children }: PreviewProps) {
  const [imagePreview, setImagePreview] = useState<string>("");

  const addImage = (image: string) => {
    setImagePreview(image);
  };

  const deledImage = () => {
    setImagePreview("");
  };

  const previewCtx = {
    imagePreview,
    addImage,
    deledImage,
  };

  return (
    <PreviewContext.Provider value={previewCtx}>
      {children}
    </PreviewContext.Provider>
  );
}
