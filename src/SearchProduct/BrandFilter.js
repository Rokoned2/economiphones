import React, { useState } from "react";

const brandList = [
  {
    _id: 1,
    name: "Samsumg",
  },
  {
    _id: 2,
    name: "Huawei",
  },
];

const BrandFilter = ({ list }) => {
  const [Checked, setChecked] = useState([]);
  console.log("Checked", Checked);

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
      <React.Fragment key={index}>
        <input
          onChange={() => handleToggle(value._id)}
          type="checkbox"
          checked={Checked.indexOf(value._id) === -1 ? false : true}
        />
        <span>{value.name}</span>
      </React.Fragment>
    ));

  return (
    <div>
      <h3>Marcas</h3>
      <div>{renderCheckboxLists()}</div>
    </div>
  );
};

export default BrandFilter;
