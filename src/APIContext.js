import React, { useContext, useState } from "react";
import { useCanvasContext } from "./CanvasContext";
import { useImageContext } from "./ImageContext";
const APIContext = React.createContext();

export const APIContextProvider = ({ children }) => {
  const {lesionParameters}=useCanvasContext()
    const {image}=useImageContext()
    const [result, setResult] = useState({})

  const handlePostRequest=async()=>{
    let formdata = new FormData()
    formdata.append("image",image)
    formdata.append("name","ImageFromOtherSide")
    console.log("before stringfy: ", lesionParameters)
    formdata.append("lesionParameters",JSON.stringify(lesionParameters))
    const response= await fetch(`/api/notes/create`, {
                method: "POST",
            body: formdata
        })
  if(response.status==200){
      const data= await response.json()
      if(data){
          console.log(data[0])
          setResult(data[0])
      }
    }
    console.log(response)
  }
  

  return (
    <APIContext.Provider
      value={{
        result,
        handlePostRequest
      }}
    >
      {children}
    </APIContext.Provider>
  );
};

export const useAPIContext = () => useContext(APIContext);