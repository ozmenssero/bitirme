import React, { useContext, useEffect,useRef, useState } from "react";
import { loadImage } from "./utils";
const ImageContext = React.createContext();

export const ImageProvider = ({ children }) => {
  const [image,setImage]=useState(null)
  const [isImageUploadWanted,setIsImageUploadWanted]=useState(true)//if false, then video upload is wanted
  const [imageBitMap,setImageBitMap]=useState(null)

  const [video,setVideo]=useState(null)
  const videoRef = useRef(null)
  const videoUploadCanvasRef=useRef(null)
  const videoUploadContextRef=useRef(null)

//______________________IMAGE_________________________________
  const handleImageInputChange=(e)=>{
    setImage(e.target.files[0])
    const imageURLObject=URL.createObjectURL(e.target.files[0])
    loadImage(setImageBitMap,imageURLObject)
  }
//______________________VIDEO_________________________________

  const handleVideoInputChange=(e)=>{
    console.log(e.target.files[0])
    const videoURLObject=URL.createObjectURL(e.target.files[0])
    setVideo(videoURLObject)
    // URL.revokeObjectURL(videoURLObject)
  }
  const handleTimeChange=(e)=>{
    videoUploadContextRef.current.drawImage(videoRef.current,0,0)
  }
  const canvasLoad=(e)=>{
    const v=videoRef.current
     console.log(v.videoWidth)
              const canvas=videoUploadCanvasRef.current
              canvas.width=v.videoWidth
              canvas.height=v.videoHeight
              canvas.style.width = `${v.videoWidth}px`;
              canvas.style.height = `${v.videoHeight}px`;
        
              const context = canvas.getContext("2d")
              videoUploadContextRef.current = context; 
  }
  
  const setImageBitMapFromVideoFrame=()=>{
    videoUploadCanvasRef.current.toBlob(function(blob){
      const file = new File([blob], 'fileName.png', { type: 'image/png' })
      setImage(file)
    },'image/png',1)
    const imageURLFromCanvas=videoUploadCanvasRef.current.toDataURL('image/png')
    loadImage(setImageBitMap,imageURLFromCanvas)
  }
  return (
    <ImageContext.Provider
      value={{
        image,
        imageBitMap,
        isImageUploadWanted,
        video,
        videoRef,
        videoUploadCanvasRef,
        videoUploadContextRef,
        setImage,
        setVideo,
        setImageBitMapFromVideoFrame,
        setIsImageUploadWanted,
        handleTimeChange,
        canvasLoad,
        setImageBitMap,
        handleImageInputChange,
        handleVideoInputChange
      }}
    >
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => useContext(ImageContext);