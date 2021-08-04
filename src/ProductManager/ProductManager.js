import React, { useState, useEffect } from "react";
import { HiPencil } from "react-icons/hi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import api from "../api";

const ProductManager = ({ products }) => {
  const [Products, setProducts] = useState([]);

  const getProducts = () => {
    api.post("/product/getProducts").then((response) => {
      if (response.data.success) {
        // if (variables.loadMore) {
        //   setProducts([...Products, ...response.data.products]);
        // } else {
        setProducts(response.data.products);
        // }
        // setPostSize(response.data.postSize);
      } else {
        alert("Failed to fectch product datas");
      }
    });
  };

  const deleteProduct = (id) => {
    api.delete(`/product/deleteProduct/${id}`).then((response) => {
      if (response.data.success) {
        // if (variables.loadMore) {
        //   setProducts([...Products, ...response.data.products]);
        // } else {
        alert("Product deleted");
        // }
        // setPostSize(response.data.postSize);
      } else {
        alert("Failed to delete product ");
      }
    });
  };

  useEffect(() => {
    //     const variables = {
    //       skip: Skip,
    //       limit: Limit,
    //     };
    //     getProducts(variables);
    getProducts();
  }, []);

  const ProductItem = ({ _id, name, price, image = "" }) => {
    return (
      <div key={_id} style={{ display: "flex" }}>
        <div>
          <img
            src={`http://localhost:5000/${image}
            `}
            alt="product-img"
            style={{ width: "6rem", height: "6rem" }}
          />
          <div>
            <h3>{name}</h3>
            <b>Price: S/. {price}</b>
          </div>
        </div>

        <Link to={`/product-manager/${_id}`}>
          <HiPencil style={{ width: "4rem", height: "4rem" }} />
        </Link>
        <MdDelete
          onClick={() => deleteProduct(_id)}
          style={{ width: "4rem", height: "4rem" }}
        />
      </div>
    );
  };

  return (
    <div>
      <h1>Productos</h1>
      <div>
        {Products.map(({ _id, name, price, images }) => (
          <ProductItem _id={_id} name={name} price={price} image={images[0]} />
        ))}
      </div>

      <Link to="/subir">
        <button className="btn u-center-element-x">Agregar producto</button>
      </Link>
    </div>
  );
};

export default ProductManager;
