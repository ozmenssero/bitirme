import React,{useEffect} from 'react'
import styled from 'styled-components'
import { useAutoZoomCanvasContext } from '../AutoZoomCanvasContext'
import { useImageContext } from '../ImageContext'
import { useCanvasContext } from '../CanvasContext'

const AutoZoomCanvas = () => {
  const {imageBitMap}=useImageContext()
  const {height,width}=imageBitMap
  const {autoZoomCanvasRef,canvasLoad,drawZoomedImage,
    drawCrosshairOnZoomedImage}= useAutoZoomCanvasContext()
  const {autoZoomMouseCoords:{mouseX,mouseY}}=useCanvasContext()

  useEffect(() => {
    canvasLoad(height,width)
  }, [imageBitMap])

   useEffect(() => {
      drawZoomedImage(height,width,mouseX,mouseY)
      drawCrosshairOnZoomedImage(height,width)
  }, [mouseX,mouseY])

  return (
    <Wrapper >
         <canvas ref={autoZoomCanvasRef} ></canvas>
    </Wrapper>
  )
}

export default AutoZoomCanvas

const Wrapper = styled.div`
    display:inline-block;
    width:100%;
    height:auto;
`