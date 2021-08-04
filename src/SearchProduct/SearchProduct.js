import React, { useState, useEffect } from "react";
import Card from "../shared/Card";
import Search from "./Search";
import PriceFilter from "./PriceFilter";
import CheckBox from "./CheckBox";
import { brandList, priceList } from "./Data";
import api from "../api";

const SearchProduct = () => {
  const [Products, setProducts] = useState([]);
  const [Skip, setSkip] = useState(0);
  const [Limit, setLimit] = useState(4);
  const [PostSize, setPostSize] = useState();

  const [Filters, setFilters] = useState({
    continents: [],
    price: [],
  });

  useEffect(() => {
    const variables = {
      skip: Skip,
      limit: Limit,
    };

    getProducts(variables);
  }, [Skip, Limit]);

  const getProducts = (variables) => {
    api.post("/product/getProducts").then((response) => {
      if (response.data.success) {
        if (variables.loadMore) {
          setProducts([...Products, ...response.data.products]);
        } else {
          setProducts(response.data.products);
        }
        setPostSize(response.data.postSize);
      } else {
        alert("Failed to fectch product datas");
      }
    });
  };

  const onLoadMore = () => {
    let skip = Skip + Limit;

    const variables = {
      skip: skip,
      limit: Limit,
      loadMore: true,
      filters: Filters,
      // searchTerm: SearchTerms,
    };
    getProducts(variables);
    setSkip(skip);
  };

  const showFilteredResults = (filters) => {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: filters,
    };
    getProducts(variables);
    setSkip(0);
  };

  const handlePrice = (value) => {
    const data = priceList;
    let array = [];

    for (let key in data) {
      if (data[key]._id === parseInt(value, 10)) {
        array = data[key].array;
      }
    }
    console.log("array", array);
    return array;
  };

  const handleFilters = (filters, category) => {
    const newFilters = { ...Filters };

    newFilters[category] = filters;

    if (category === "price") {
      let priceValues = handlePrice(filters);
      newFilters[category] = priceValues;
    }

    console.log(newFilters);

    showFilteredResults(newFilters);
    setFilters(newFilters);
  };

  return (
    <div className="products">
      <div className="filters">
        <Search />

        <CheckBox
          list={brandList}
          handleFilters={(filters) => handleFilters(filters, "brands")}
        />
        <PriceFilter
          list={priceList}
          handleFilters={(filters) => handleFilters(filters, "price")}
        />
      </div>
      <h1 className="u-center-text">Productos ({Products.length})</h1>
      <div className="card-collection">
        {Products.map(({ _id, title, price, images }) => (
          <Card id={_id} title={title} price={price} images={images} />
        ))}
      </div>
      {PostSize >= Limit && (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={onLoadMore}>Load More</button>
        </div>
      )}
    </div>
  );
};

export default SearchProduct;
