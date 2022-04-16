import React from 'react'
import styled from 'styled-components'
import Canvas from './Canvas';
import { useCanvasContext } from '../CanvasContext'
import AutoZoomCanvas from './AutoZoomCanvas';
const CanvasBlocks = () => {

    const {canvasMode,changeCanvasMode}=useCanvasContext()

  return (
    <Wrapper>
        <span>

        <Canvas />
        <p>
            Currently in {canvasMode.cropMode ? "Cropping Mode":"Diameter Mode"}
        </p>
        <button onClick={()=>changeCanvasMode()}>
                {canvasMode.cropMode ? "To Diameter Mode":"To Cropping Mode"}
        </button>
        </span>
        <AutoZoomCanvas />
    </Wrapper>
  )
}

export default CanvasBlocks

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
width:100%;
    height:auto;
    p{
        margin:0;
    }
`