import React, { useContext, useRef } from "react";
import { useImageContext } from "./ImageContext";

const AutoZoomCanvasContext = React.createContext();

export const AutoZoomCanvasProvider = ({ children }) => {
  const {imageBitMap}=useImageContext()

  const autoZoomCanvasRef = useRef(null);
  const autoZoomContextRef = useRef(null);

  const canvasLoad=(height,width)=>{
    const canvas=autoZoomCanvasRef.current
    canvas.width=width
    canvas.height=height
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const context = canvas.getContext("2d")
    autoZoomContextRef.current = context;
    autoZoomContextRef.current.strokeStyle = "red";
    autoZoomContextRef.current.lineWidth = 1;
    autoZoomContextRef.current.imageSmoothingEnabled=false
  }
  //Draw 200x200 Zoomed Image 
  const drawZoomedImage=(height,width,mouseX,mouseY)=>{
    autoZoomContextRef.current.clearRect(0,0,width,height)
    autoZoomContextRef.current.drawImage(imageBitMap,mouseX-50,mouseY-50
      ,100,100,width/2-100,height/2-100,200,200) 
  }
  //Draw crosshair for 200x200 Image
  const drawCrosshairOnZoomedImage=(height,width)=>{
    autoZoomContextRef.current.beginPath()
    autoZoomContextRef.current.moveTo(width/2,height/2-100)
    autoZoomContextRef.current.lineTo(width/2, height/2+100)
    autoZoomContextRef.current.moveTo(width/2-100, height/2)
    autoZoomContextRef.current.lineTo(width/2+100, height/2)
    autoZoomContextRef.current.stroke()
  }

  return (
    <AutoZoomCanvasContext.Provider
      value={{
        autoZoomCanvasRef,
        autoZoomContextRef,
        canvasLoad,
        drawZoomedImage,
        drawCrosshairOnZoomedImage
      }}
    >
      {children}
    </AutoZoomCanvasContext.Provider>
  );
};

export const useAutoZoomCanvasContext = () => useContext(AutoZoomCanvasContext);