import React, { useContext, useRef, useState,useEffect } from "react";
import { useImageContext } from "./ImageContext";

const CanvasContext = React.createContext();

export const CanvasProvider = ({ children }) => {
  const {imageBitMap}=useImageContext()
  const [isDrawing, setIsDrawing] = useState(false)
  const mouseRef=useRef({lastX:0,lastY:0,mouseX:0,mouseY:0})
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [autoZoomMouseCoords,setAutoZoomMouseCoords]=useState({mouseX:0,mouseY:0})
  const [canvasMode,setCanvasMode]=useState({cropMode:true,diameterMode:false})
  const [lesionParameters,setLesionParameters]=useState({cropCoordinates:{lastX:0,lastY:0,mouseX:0,mouseY:0},lesionLength:0})//gotluk yapabilir

  const canvasLoad=(height,width)=>{
    const canvas=canvasRef.current
    canvas.width=width
    canvas.height=height
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const context = canvas.getContext("2d")
    context.strokeStyle = "red";
    context.lineWidth = 1;
    contextRef.current = context;
    contextRef.current.drawImage(imageBitMap,0,0) 
  }

  const startDrawing = (e) => {
    //   canvasx=e.target.offsetLeft
    //   canvasy=e.target.offsetTop
        mouseRef.current.lastX=parseInt(e.pageX-e.target.offsetLeft)
        mouseRef.current.lastY=parseInt(e.pageY-e.target.offsetTop)
        setIsDrawing(true);
      };
      
      const finishDrawing = (e) => {
        const mouseX=parseInt(e.pageX-e.target.offsetLeft)
        const mouseY=parseInt(e.pageY-e.target.offsetTop)
        setIsDrawing(false);
        setLesionParameters(prevState=>{
          if(canvasMode.cropMode==true){
            return {...prevState,cropCoordinates:{mouseX,mouseY,lastX:mouseRef.current.lastX,lastY:mouseRef.current.lastY}}
          }else if(canvasMode.diameterMode==true){
            const hypotX=mouseX-mouseRef.current.lastX
            const hypotY=mouseY-mouseRef.current.lastY
            return {...prevState,lesionLength:Math.hypot(hypotX,hypotY)}
          }else{
            return prevState
          }
        })
        console.log(lesionParameters) //gec yeniliyor lesion lengthi
        console.log(lesionParameters["cropCoordinates"]) //gec yeniliyor lesion lengthi
        console.log(lesionParameters) //gec yeniliyor lesion lengthi
    };

    const onMouseMoveDrawLine = (e) => {
      mouseRef.current.mouseX=parseInt(e.pageX-e.target.offsetLeft)
      mouseRef.current.mouseY=parseInt(e.pageY-e.target.offsetTop)
      setAutoZoomMouseCoords({mouseX:mouseRef.current.mouseX,mouseY:mouseRef.current.mouseY})
      if (isDrawing) {
          contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height)
          contextRef.current.drawImage(imageBitMap,0,0)
          contextRef.current.beginPath()
          if(canvasMode.cropMode==true){
            const rectWidth=mouseRef.current.mouseX-mouseRef.current.lastX
            const rectHeight=mouseRef.current.mouseY-mouseRef.current.lastY
            contextRef.current.rect(mouseRef.current.lastX,mouseRef.current.lastY,rectWidth,rectHeight)
          }else{ //diameter mode
            contextRef.current.moveTo(mouseRef.current.lastX,mouseRef.current.lastY)
            contextRef.current.lineTo(mouseRef.current.mouseX,mouseRef.current.mouseY)
          }
          contextRef.current.stroke()
      }
  };

    const changeCanvasMode=()=>{
      if(canvasMode.cropMode==true){
        setCanvasMode({cropMode:false,diameterMode:true})
      }else{
        setCanvasMode({cropMode:true,diameterMode:false})
      }
    }
  return (
    <CanvasContext.Provider
      value={{
        canvasRef,
        contextRef,
        mouseRef,
        autoZoomMouseCoords,
        canvasMode,
        lesionParameters,
        canvasLoad,
        startDrawing,
        finishDrawing,
        onMouseMoveDrawLine,
        changeCanvasMode,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvasContext = () => useContext(CanvasContext);