import React, { useState, useCallback } from "react";
import Dropzone from "react-dropzone";
import { FaUpload } from "react-icons/fa";
import api from "../api";

const FileUpload = ({ refreshFunction }) => {
  const [images, setImages] = useState([]);

  const onDrop = useCallback(
    (files) => {
      let formData = new FormData();
      const config = {
        header: { "content-type": "multipart/form-data" },
      };
      formData.append("file", files[0]);
      //save the Image we chose inside the Node Server
      api.post("/product/uploadImage", formData, config).then((response) => {
        if (response.data.success) {
          setImages([...images, response.data.image]);
          refreshFunction([...images, response.data.image]);
        } else {
          alert("Failed to save the Image in Server");
        }
      });
    },
    [images, refreshFunction]
  );

  const onDelete = (image) => {
    const currentIndex = images.indexOf(image);

    let newImages = [...images];
    newImages.splice(currentIndex, 1);

    setImages(newImages);
    refreshFunction(newImages);
  };

  return (
    <div className="file-upload">
      <Dropzone onDrop={onDrop} multiple={false} maxSize={800000000}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps()} className="file-upload__input">
            <input {...getInputProps()} />
            <FaUpload className="upload__imgs-input-icon" />
          </div>
        )}
      </Dropzone>

      <div className="file-upload__output">
        {images.map((image, index) => (
          <div onClick={() => onDelete(image)}>
            <img
              style={{ minWidth: "300px", width: "300px", height: "240px" }}
              src={`http://localhost:5000/${image}`}
              alt={`productImg-${index}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileUpload;
