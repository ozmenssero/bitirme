const loadImage = (setImageBitMap,imageUrl) => { //dimension al
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      // console.log(img.naturalWidth,img.naturalHeight)
      Promise.all([
        createImageBitmap(img),
      ]).then(function(imageBitMap) {
        console.log(imageBitMap[0])
        setImageBitMap(imageBitMap[0]);
      });
    };
    img.onerror = (err) => {
      console.log("img error");
      console.error(err);
    };
  };

export {loadImage}