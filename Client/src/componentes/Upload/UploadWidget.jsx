import React, { useEffect } from 'react';
import { Image, Video, Transformation, CloudinaryContext } from 'cloudinary-react';

const UploadWidget = ({ onImageUpload }) => {
  useEffect(() => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dy4jmodgl',
        uploadPreset: 'gbkoii7w',
      },
      (error, result) => {
        if (!error && result && result.event === 'success') {
          console.log('Imagen cargada correctamente:', result.info.secure_url);
          onImageUpload(result.info.secure_url)
        }
      }
    );

    const imageElement = document.getElementById('image');
    if( imageElement ) {
      imageElement.addEventListener('click', handleClick);
    } 

    function handleClick(event){
      event.preventDefault();
      widget.open();
    };

    return () => {
      if(imageElement){
        imageElement.removeEventListener('click', () => { 
          widget.open();
        });
      }
    };
  }, []);

  return (
    <div>
      <button id='image'>Cargar imagen</button>
    </div>
  );
};

export default UploadWidget;

//   const cloudName = "dy4jmodgl"; // replace with your own cloud name
//   const uploadPreset = "gbkoii7w"; // replace with your own upload preset

//   var myWidget = window.cloudinary.createUploadWidget(
//     {
//       cloudName: cloudName,
//       uploadPreset: uploadPreset,
//     },
//     (error, result) => {
//       if (!error && result && result.event === "success") {
//         console.log("Done! Here is the image info: ", result.info);

//         const uploadedImage = document.getElementById("uploadedimage");
//         if (uploadedImage) {
//           uploadedImage.setAttribute("src", result.info.secure_url);
//         }
//       }
//     }
//   );
//   document.getElementById("upload_widget").addEventListener(
//     "click",
//     function (event) {
//       event.preventDefault();
//       myWidget.open();
//     },
//     false
//   );
// }