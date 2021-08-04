import React, { useState } from "react";

const PriceFilter = ({ list, handleFilters }) => {
  const [radio, setRadio] = useState("Todos");

  const renderRadioBox = () =>
    list &&
    list.map((value) => (
      <div className="price-filter__item">
        {/* <div style={{ display: "inline-block" }}> */}
        <input
          type="radio"
          checked={radio === value.name}
          key={value._id}
          value={`${value.name}`}
          onChange={(e) => {
            handleChange(e);
          }}
        />
        <label>{value.name}</label>
      </div>
    ));

  const handleChange = (event) => {
    setRadio(event.target.value);
    handleFilters(event.target.value);
  };

  return (
    <div className="price-filter u-center-element-x">
      <h3 className="heading-terciary">Precios</h3>
      <div className="price-filter__list">{renderRadioBox()}</div>
    </div>
  );
};

export default PriceFilter;
