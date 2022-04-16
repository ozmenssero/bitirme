import React,{useState,useEffect,useRef} from 'react'
  import Canvas from './Canvas';

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
  const [image,setImage]=useState(null)
  const [imageURL,setImageURL]=useState(null)
  const [imageBitMap,setImageBitMap]=useState(null)

  useEffect(()=>{
    if(image){
      const imageURLObject=URL.createObjectURL(image)
      loadImage(setImageBitMap,imageURLObject)
      setImageURL(imageURLObject)
      return () => URL.revokeObjectURL(imageURLObject)
    }
  },[image])
 
  // useEffect(()=>{
  //   if(imageRef.current){

  //     console.log(imageRef.current.naturalHeight)
  //   }
  // },[imageRef])

  
  let handleImageInputChange=(e)=>{
    e.preventDefault()
    setImage(e.target.files[0])
  }
  
  let handlePostRequest=async()=>{
    let formdata = new FormData()
    formdata.append("image",image)
    formdata.append("name","ImageFromOtherSide")
    const response= await fetch(`/api/notes/create`, {
                method: "POST",
            body: formdata
        })
  if(response.status==200){
      const lesionLength= await response.json()
      console.log(lesionLength)
    }
    console.log(response)
  }
  
  return (
    <div>
      <input name='image' type='file' onChange={handleImageInputChange}></input>
      {imageURL && <img src={imageURL} alt="yarak"></img>}
      <button type='button' onClick={()=>handlePostRequest()}>post</button>
      {imageBitMap && <Canvas dims={imageBitMap} />}
    </div>
  )
}

export default HomePage


//   let getNotes= async ()=>{
//     let response= await fetch('/api/notes/') //package json proxy ayarladin
//     let data= await response.json()
//     console.log("data: ",data)
//     setImage(data)
// }