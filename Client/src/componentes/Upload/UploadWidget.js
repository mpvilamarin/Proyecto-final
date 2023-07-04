// import { useEffect, useRef } from "react";

// const UploadWidget = () => {
//   const cloudinaryRef = useRef();
//   const widgetRef = useRef();
//   useEffect(() => {
//     cloudinaryRef.current = window.cloudinary;
//     console.log(cloudinaryRef.current);
//     widgetRef.current = cloudinaryRef.current.createUploadWidget(
//       {
//         cloudName: "drnfubuwt",
//         uploadPreset: "yta9cllk",
//       },
//       function (error, result) {
//         console.log(result);
//       }
//     );
//   }, []);
//   return <button onClick={() => widgetRef.current.open()}>Upload</button>;
// };

// export default UploadWidget;

import React, { Component } from "react";

class CloudinaryUploadWidget extends Component {
  componentDidMount() {
    const cloudName = "drnfubuwt"; // replace with your own cloud name
    const uploadPreset = "yta9cllk"; // replace with your own upload preset

    // Remove the comments from the code below to add
    // additional functionality.
    // Note that these are only a few examples, to see
    // the full list of possible parameters that you
    // can add see:
    //   https://cloudinary.com/documentation/upload_widget_reference

    var myWidget = window.cloudinary.createUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: uploadPreset,
        // cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        // multiple: false,  //restrict upload to a single file
        // folder: "user_images", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        // theme: "purple", //change to a purple theme
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done! Here is the image info: ", result.info);
          // document
          //   .getElementById("uploadedimage")
          //   .setAttribute("src", result.info.secure_url);
          const uploadedImage = document.getElementById("uploadedimage");
          if (uploadedImage) {
            uploadedImage.setAttribute("src", result.info.secure_url);
          }
        }
      }
    );
    document.getElementById("upload_widget").addEventListener(
      "click",
      function () {
     //   event.preventDefault();
        myWidget.open();
      },
      false
    );
  }

  render() {
    return (
      <button id="upload_widget" className="cloudinary-button">
        Upload
      </button>
    );
  }
}

export default CloudinaryUploadWidget;
