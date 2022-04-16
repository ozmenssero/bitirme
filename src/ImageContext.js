import React, { useContext, useRef, useState } from "react";

const ImageContext = React.createContext();

export const ImageProvider = ({ children }) => {
  const [image,setImage]=useState(null)
  const [imageBitMap,setImageBitMap]=useState(null)

  const handleImageInputChange=(e)=>{
    e.preventDefault()
    setImage(e.target.files[0])
  }


  return (
    <ImageContext.Provider
      value={{
        image,
        imageBitMap,
        setImageBitMap,
        handleImageInputChange
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => useContext(ImageContext);