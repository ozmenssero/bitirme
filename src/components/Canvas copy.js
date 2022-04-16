import React,{useRef,useEffect,useState} from 'react'
import styled from 'styled-components'
import bitirmedamar from "./bitirmedamar.png"

const Canvas = ({dims}) => {
    const {height,width}= dims
    const canvasRef=useRef(null)
    const contextRef=useRef(null)
    const [isDrawing, setIsDrawing] = useState(false)
    const mouseRef=useRef({lastX:0,lastY:0,mouseX:0,mouseY:0})
    
    const canvasLoad=(height,width)=>{

        const canvas=canvasRef.current
        canvas.width=width
        canvas.height=height
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;

        const context = canvas.getContext("2d")
        context.drawImage(dims,0,0)
        context.strokeStyle = "black";
        context.lineWidth = 1;
        contextRef.current = context;
        context.strokeRect(10,10,40,40)
    }

    const startDrawing = (e) => {
    //   canvasx=e.target.offsetLeft
    //   canvasy=e.target.offsetTop
        mouseRef.current.lastX=parseInt(e.pageX-e.target.offsetLeft)
        mouseRef.current.lastY=parseInt(e.pageY-e.target.offsetTop)
        setIsDrawing(true);
      };
    
      const finishDrawing = (e) => {
        setIsDrawing(false);
      };
    
      const draw = (e) => {
        mouseRef.current.mouseX=parseInt(e.pageX-e.target.offsetLeft)
        mouseRef.current.mouseY=parseInt(e.pageY-e.target.offsetTop)
        if (isDrawing) {
            contextRef.current.clearRect(0,0,canvasRef.current.width,canvasRef.current.height)
            contextRef.current.drawImage(dims,0,0)
            contextRef.current.beginPath()
            const rectWidth=mouseRef.current.mouseX-mouseRef.current.lastX
            const rectHeight=mouseRef.current.mouseY-mouseRef.current.lastY
            contextRef.current.rect(mouseRef.current.lastX,mouseRef.current.lastY,rectWidth,rectHeight)
            contextRef.current.stroke()
        }
      };

    useEffect(() => {
        console.log(dims)
        canvasLoad(height,width)
    }, [])
    
    return (
        <Wrapper>
            <canvas ref={canvasRef} onMouseDown={startDrawing}onMouseUp={finishDrawing}
            onMouseMove={draw}></canvas>
        </Wrapper>
    )
}

export default Canvas

const Wrapper = styled.div`
    display:inline-block;
    width:100%;
    height:auto;
`