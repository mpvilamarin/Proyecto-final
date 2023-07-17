import React, { useEffect } from "react";
import { Image, Transformation } from "cloudinary-react";
import styles from "./UploadWidget.module.css";

const UploadWidget = ({ onImageUpload }) => {
  useEffect(() => {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "desxgkda5",
        uploadPreset: "ml_default",
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Imagen cargada correctamente:", result.info.secure_url);
          onImageUpload(result.info.secure_url);
        }
      }
    );

    const imageElement = document.getElementById("image");
    if (imageElement) {
      imageElement.addEventListener("click", handleClick);
    }

    function handleClick(event) {
      event.preventDefault();
      widget.open();
    }

    return () => {
      if (imageElement) {
        imageElement.removeEventListener("click", () => {
          widget.open();
        });
      }
    };
  }, []);

  return (
    <div className={styles.containerbtn}>
      <button id="image" className={styles.btnImg}>
        Cargar imagen
      </button>
    </div>
  );
};

export default UploadWidget;
