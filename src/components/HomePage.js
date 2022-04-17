import React,{useState,useEffect,useRef} from 'react'
import { useImageContext } from '../ImageContext';
import { useAPIContext } from '../APIContext';
import CanvasBlocks from './CanvasBlocks';
import ResultContainer from './ResultContainer';

import UserInputUpload from './HomePageComponents/UserInputUpload';
const HomePage = () => {
  const {image,imageBitMap}=useImageContext()
    const {handlePostRequest,result}=useAPIContext()
    
  if(!!Object.keys(result).length){
    return <ResultContainer result={result} image={image}/>
  }
  if(imageBitMap){
    return <CanvasBlocks />
  }
  return (
    <div>
      <UserInputUpload />
    </div>
  )
}

export default HomePage


//package json proxy ayarladin
