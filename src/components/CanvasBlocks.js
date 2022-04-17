import React from 'react'
import styled from 'styled-components'
import Canvas from './Canvas';
import { useCanvasContext } from '../CanvasContext'
import AutoZoomCanvas from './AutoZoomCanvas';
import { useAPIContext } from '../APIContext';
const CanvasBlocks = () => {

    const {canvasMode,changeCanvasMode}=useCanvasContext()
    const {handlePostRequest}=useAPIContext()
  return (
    <Wrapper>
        <div className='imageArea'>
            <Canvas />
            <AutoZoomCanvas />
        </div>
        <div className='buttonArea'>
            <p>
                Currently in {canvasMode.cropMode ? "Cropping Mode":"Diameter Mode"}
            </p>
            <button onClick={()=>changeCanvasMode()}>
                    {canvasMode.cropMode ? "To Diameter Mode":"To Cropping Mode"}
            </button>
            <hr/>
            <button type='button' onClick={()=>handlePostRequest()}>Calculate Stent Length!</button>
        </div>
    </Wrapper>
  )
}

export default CanvasBlocks

const Wrapper = styled.div`
    padding: 1rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    .imageArea{
        display: grid;
        grid-template-columns: 1fr 1fr;
        width:100%;
        height:auto;
    }
    .buttonArea{
        padding: 1rem;
        font-size: 1.1rem;
        p{
            margin:0.5rem 0;
            color: var(--clr-white);
        }
        hr{
            margin: 1rem 0;
        }
    }
`