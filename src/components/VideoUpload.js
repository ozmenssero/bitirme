import React,{useEffect} from 'react'
import { useImageContext } from '../ImageContext'
import styled from 'styled-components'

const VideoUpload = () => {
    const {image,imageBitMap,
        video,videoRef,canvasLoad,setImageBitMapFromVideoFrame,
        videoUploadCanvasRef,videoUploadContextRef,handleTimeChange,
        setImageBitMap}=useImageContext()
   
  return (
    <Wrapper>
      <div className='videoArea'>
        <video autoPlay
        controls
        muted
        src={video} ref={videoRef} onLoadedData={canvasLoad} onTimeUpdate={handleTimeChange} />
        <canvas ref={videoUploadCanvasRef} />
      </div>
      <button type="button" onClick={setImageBitMapFromVideoFrame}>Use This Frame</button>
    </Wrapper>
  )
}

export default VideoUpload

const Wrapper = styled.div`
    width:100vw;
    border: 0px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .videoArea{
      margin-bottom:1rem;
      video{
        margin-right: 1rem;
      }

    }
`