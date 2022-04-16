import React from 'react'
import styled from "styled-components"

const ResultContainer = ({result,image}) => {
    const {stentLengthInMilimeter,stentLengthInPixel,
        catheterDiameterInPixel,catheterDiameterInMilimeter}=result
  
    return (
    <Wrapper>
        <img src={URL.createObjectURL(image)} alt="bum"></img>
        <div>
            <h2>Values In Pixels</h2>
            <hr></hr>
            <p>Catheter Diameter In Pixel: 
                <span> {catheterDiameterInPixel}p</span>
            </p>
            <p>Stent Length In Pixel:
                <span> {stentLengthInPixel}p</span>
            </p>
        </div>
        <div>
            <h2>Values In Milimeter:</h2>
            <hr></hr>
            <p>Catheter Diameter In Milimeter: 
                <span> {catheterDiameterInMilimeter}mm</span>
            </p>
            <p>Stent Length In Milimeter: 
                <span> {stentLengthInMilimeter}mm</span>
            </p>
        </div>
    </Wrapper>
  )
}

export default ResultContainer

const Wrapper = styled.header`
    display:flex;
    justify-content: center;
    padding: 1rem;
    width:100%;
    height:auto;
    img{
        width: 150px;
        height: 150px;
        object-fit: cover;
    }
    hr{
        width: 50%;
        height: 1px;
        background-color: black;
        border: none;
    }
    h2{
        margin: 0;
    }
    p{
        margin: 1rem;
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
    }
`