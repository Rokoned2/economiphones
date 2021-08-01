import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FileUpload from "./FileUpload";
import api from "../api";

const Brands = [
  { key: 1, value: "Samsumg" },
  { key: 2, value: "Huawei" },
];

const UploadProduct = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [images, setImages] = useState([]);

  const submitProduct = (data) => {
    const { title, description, price, brand } = data;

    if (!title || !description || !price || !brand) {
      return alert("fill all the fields first!");
    }

    const variables = {
      // writer: user.uid,
      title,
      description,
      price,
      brand,
      images,
    };

    console.log("variables ", variables);

    api.post("/product/uploadProduct", variables).then((response) => {
      if (response.data.success) {
        alert("Product Successfully Uploaded");
        props.history.push("/");
      } else {
        alert("Failed to upload Product");
      }
    });
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };

  return (
    <div className="upload-product">
      <h1 className="u-center-text">Upload Product</h1>
      <div>
        <FileUpload refreshFunction={updateImages} />
      </div>

      <form className="form" onSubmit={handleSubmit(submitProduct)}>
        <div className="form__group">
          <label className="form__label">Título</label>
          <input
            className="form__input"
            {...register("title", { required: true })}
            type="text"
          />
        </div>

        <div className="form__group">
          <label className="form__label">Descripción</label>
          <input
            className="form__input"
            {...register("description", { required: true })}
            type="text"
          />
        </div>

        <div className="form__group">
          <label className="form__label">Precio</label>
          <input
            className="form__input"
            {...register("price", { required: true })}
            type="number"
          />
        </div>

        <div className="form__group">
          <label className="form__label">Marca</label>
          <select {...register("brand", { required: true })}>
            {Brands.map((brand) => (
              <option key={brand.key} value={brand.key}>
                {brand.value}
              </option>
            ))}
          </select>
        </div>

        <button className="btn" type="submit">
          Subir
        </button>
      </form>
    </div>
  );
};

export default UploadProduct;
