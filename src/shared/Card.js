import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, title, price, images }) => {
  return (
    <div className="card">
      <Link className="card__img-box" key={id} to={`/productos/${id}`}>
        <img
          className="card__img"
          src={`http://localhost:5000/${images[0]}`}
          alt=""
        />
      </Link>
      <Link
        className="heading-tertiary card__title"
        key={id}
        to={`/productos/${id}`}
      >
        {title}
      </Link>
      <p>S/ {price}</p>
    </div>
  );
};

export default Card;
