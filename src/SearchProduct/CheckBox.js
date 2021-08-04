import React, { useState } from "react";

const CheckBox = ({ list }) => {
  const [Checked, setChecked] = useState([]);

  const handleToggle = (value) => {
    const currentIndex = Checked.indexOf(value);
    const newChecked = [...Checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
    // props.handleFilters(newChecked);
    //update this checked information into Parent Component
  };

  const renderCheckboxLists = () =>
    list &&
    list.map((value, index) => (
      <div key={index} className="price-filter__item">
        <input
          onChange={() => handleToggle(value._id)}
          type="checkbox"
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        <span>{value.name}</span>
      </div>
    ));

  return (
    <div className="checkbox u-center-element-x">
      <h3 className="heading-terciary">Marcas</h3>
      <div className="checkbox__list">{renderCheckboxLists()}</div>
    </div>
  );
};

export default CheckBox;
