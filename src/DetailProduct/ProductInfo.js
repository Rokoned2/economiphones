import React, { useEffect, useState } from "react";

const ProductInfo = ({ detail, addToCart }) => {
  const [Product, setProduct] = useState({});

  useEffect(() => {
    setProduct(detail);
  }, [detail]);

  const addToCarthandler = () => {
    addToCart(detail._id);
  };

  return (
    <div>
      <h2>Descripción</h2>
      <p>{Product.description}</p>
      <h2>Precio:</h2>
      <p>S/ 3,599</p>
      <button className="btn u-center-element-x" onClick={addToCarthandler}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;
