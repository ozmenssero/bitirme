import React,{useState,useEffect,useRef} from 'react'
import { useImageContext } from '../ImageContext';
import { useAPIContext } from '../APIContext';
import CanvasBlocks from './CanvasBlocks';
import ResultContainer from './ResultContainer';

  const loadImage = (setImageBitMap,imageUrl) => { //dimension al
  const img = new Image();
  img.src = imageUrl;
  img.onload = () => {
    // console.log(img.naturalWidth,img.naturalHeight)
    Promise.all([
      createImageBitmap(img),
    ]).then(function(imageBitMap) {
      setImageBitMap(imageBitMap[0]);
    });
  };
  img.onerror = (err) => {
    console.log("img error");
    console.error(err);
  };
};

const HomePage = () => {
  const {image,imageBitMap,
    handleImageInputChange,
    setImageBitMap}=useImageContext()
    const {handlePostRequest,result}=useAPIContext()
    
  useEffect(()=>{
    if(image){
      const imageURLObject=URL.createObjectURL(image)
      loadImage(setImageBitMap,imageURLObject)
      return () => URL.revokeObjectURL(imageURLObject)
    }
  },[image])
 


  return (
    <div>
      <input name='image' type='file' onChange={handleImageInputChange}></input>
      <button type='button' onClick={()=>handlePostRequest()}>post</button>
      {imageBitMap && <CanvasBlocks />}
      {!!Object.keys(result).length && <ResultContainer result={result} image={image}/>}
    </div>
  )
}

export default HomePage


//package json proxy ayarladin
