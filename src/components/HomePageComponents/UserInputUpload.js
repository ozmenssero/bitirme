import React,{useState,useEffect,useRef} from 'react'
import styled from 'styled-components'
import VideoUpload from '../VideoUpload';
import { useImageContext } from '../../ImageContext';

const UserInputUpload = () => {
    const {image,imageBitMap,
        handleImageInputChange,
        video,
        setImageBitMap,isImageUploadWanted,
        handleVideoInputChange,setIsImageUploadWanted}=useImageContext()

  if(video){
      return <VideoUpload />
  }
  return (
    <Wrapper>
        <h2>Upload {isImageUploadWanted ? "Image":"Video"}</h2>
        <div className='inputArea'>
            <label htmlFor="image">
              Click to upload desired {isImageUploadWanted ? "Image":"Video"} to find stent length...
            </label>
            <input name='image' type='file' id="image" onChange={isImageUploadWanted ?
            handleImageInputChange:handleVideoInputChange}></input>
        </div>
        <button type="button" className='modeButton' onClick={()=>setIsImageUploadWanted(!isImageUploadWanted)}>
            Change Uploading Mode
        </button>
    </Wrapper>
  )
}

export default UserInputUpload

const Wrapper = styled.div`
    width:100vw;
    border: 0px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .inputArea{
        color: var(--clr-white);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 2rem;
        input{
            visibility: hidden;
        }
        label{
            color: var(--clr-white);
            font-size: 1rem;
            text-transform: capitalize;
            letter-spacing: var(--spacing);
            padding: 0.25rem 0.5rem;
            border-radius: var(--radius);
            border: 1px solid var(--clr-white);
            transition: var(--transition);
        }
        label:hover {
        background: var(--clr-white);
        color: var(--clr-black-background);
        cursor: pointer;
        }

    }
    .modeButton{
        border: 1px solid var(--clr-green);
        background-color: var(--clr-green);
        color: var(--clr-white);
    }
    .modeButton:hover{
        color: var(--clr-black-background);
    }
    h2{
        color: var(--clr-green);
    }
`