import React from 'react'
import styled from 'styled-components'
import Canvas from './Canvas';
import { useCanvasContext } from '../CanvasContext'
import AutoZoomCanvas from './AutoZoomCanvas';
import { useAPIContext } from '../APIContext';
const CanvasBlocks = () => {

    const {canvasMode,changeCanvasMode,clearDrawnCircles,
        lesionParameters,setLesionParamFrenchOnChange}=useCanvasContext()
    const {handlePostRequest}=useAPIContext()
    const handleModeParagraph=()=>{
        let paragraph="Currently in "
        if(canvasMode.cropMode===true){
            paragraph+="Cropping Mode"
        }else if(canvasMode.diameterMode===true){
            paragraph+="Diameter Mode"
        }else if(canvasMode.pointMode===true){
            paragraph+="Point Mode"
        }
        return paragraph
    }
  return (
    <Wrapper>
        <div className='imageArea'>
            <Canvas />
            <AutoZoomCanvas />
        </div>
        <div className='buttonArea'>
            <p>
                {handleModeParagraph()}
            </p>
            <button className='modeButtons' onClick={()=>changeCanvasMode("DIAMETER")}>
                    {"Diameter Mode"}
            </button>
            <button className='modeButtons' onClick={()=>changeCanvasMode("CROPPING")}>
                    {"Cropping Mode"}
            </button>
            <button className='modeButtons' onClick={()=>changeCanvasMode("POINT")}>
                    {"Point Mode"}
            </button>
            <button className='modeButtons' onClick={()=>clearDrawnCircles()}>
                Clear All Points
            </button>
            <hr/>
            <div className='selectInputDiv'>
                <select className='selectInput' value={lesionParameters.french} onChange={(e)=>setLesionParamFrenchOnChange(e)}>
                    <option value="6">6 French</option>
                    <option value="7">7 French</option>
                </select>
            </div>
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
        .modeButtons{
            margin: 0 0.5rem;
        }
        .selectInputDiv{
          margin-bottom: 1rem;
        }
        .selectInput{
            color: var(--clr-black-background);
            font-size: 0.8rem;
            letter-spacing: var(--spacing);
            padding: 0.20rem 0.45rem;
            border-radius: var(--radius);
            border: 1px solid var(--clr-white);
            outline:none;
            option{
                border-radius: var(--radius);
            }
        }
        p{
            margin:0.5rem 0;
            color: var(--clr-white);
        }
        hr{
            margin: 1rem 0;
        }
    }
`