import React, { useEffect } from 'react';
import { Image,Transformation} from 'cloudinary-react';

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
      {(
        <Image >
          <Transformation width="286" height="205" crop="fill" />
        </Image>
      )}
    </div>
  );
};

export default UploadWidget;