import React,{useEffect} from 'react'
import styled from 'styled-components'
import { useCanvasContext } from '../CanvasContext'
import { useImageContext } from '../ImageContext'

const Canvas = () => {
    const {onMouseOver,canvasRef,canvasLoad,startDrawing,finishDrawing,onMouseMoveDrawLine,canvasMode,changeCanvasMode}=useCanvasContext()
    const {imageBitMap}=useImageContext()


    useEffect(() => {
        canvasLoad(imageBitMap.height,imageBitMap.width)
    }, [imageBitMap])
    
    return (
        <Wrapper>
            <canvas ref={canvasRef} onMouseDown={startDrawing}onMouseUp={finishDrawing}
            onMouseMove={onMouseMoveDrawLine} ></canvas>
        </Wrapper>
    )
}

export default Canvas

const Wrapper = styled.div`
    display:inline-block;
    width:100%;
    height:auto;
`