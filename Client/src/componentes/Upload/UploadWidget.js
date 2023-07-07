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