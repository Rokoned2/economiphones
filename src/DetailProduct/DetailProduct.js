import React, { useEffect, useState } from "react";
import api from "../api";
import { useDispatch } from "react-redux";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import { addToCart } from "../redux/actions/user_actions";

const DetailProduct = (props) => {
  const [Images, setImages] = useState([]);
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    api
      .get(`/product/products_by_id?id=${productId}&type=single`)
      .then((response) => {
        setProduct(response.data[0]);
      });
  }, []);

  const addToCartHandler = (productId) => {
    dispatch(addToCart(productId));
  };

  return (
    <div className="product-details">
      <div>
        <h1>DetailProduct {Product.title}</h1>
      </div>
      <div>
        <div>
          <ProductImage detail={Product} />
        </div>
        <div>
          <ProductInfo addToCart={addToCartHandler} detail={Product} />
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
