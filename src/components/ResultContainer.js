import React from 'react'
import styled from "styled-components"

const ResultContainer = ({result,image}) => {
    const {stentLengthInMilimeter,stentLengthInPixel,
        catheterDiameterInPixel,catheterDiameterInMilimeter}=result
  
    return (
    <Wrapper>
        <h1>
            Results
        </h1>
        <div className='resultArea'>
            <div>
                <img src={URL.createObjectURL(image)} alt="bum"></img>
            </div>
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
        </div>
    </Wrapper>
  )
}

export default ResultContainer

const Wrapper = styled.header`
    width: 100vw;
    text-align: center;
    padding: 2rem 0;
    h1{
        color: var(--clr-green);
    }
    .resultArea{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 2rem 10rem;
        width:100%;
        height:auto;
        color: var(--clr-white);
        img{
            max-width: 250px;
            max-height: 250px;
            object-fit: cover;
        }
        hr{
            width: 50%;
            margin: 0 auto;
            height: 1px;
            /* background-color: black; */
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
    }
`