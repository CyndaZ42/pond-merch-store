import React from "react";
import MerchItem from "./MerchItem";
import PropTypes from "prop-types";

const merchItems = [{
  name: "Vinyl",
  year: "2022",
  price: "20", 
  onStock: 10 
  },
  {
  name: "Shirt",
  year: "2022",
  price: "45",
  onStock: 23 

  },
  {
  name: "Hoodie",
  year: "2021",
  price: "60",
  onStock: 50 

  },
  {
  name: "Poster",
  year: "2019",
  price: "10",
  onStock: 100 

  }
];


function MerchList() {
  return (
    <React.Fragment>
      <hr/>
      {merchItems.map((item, index) =>
      <MerchItem name={item.name}
      year={item.year}
      price={item.price}
      onStock={item.onStock}
      key={index} />
      )}
    </React.Fragment>
  );
}

MerchList.propTypes = {
  merchItem: PropTypes.array
}

export default MerchList;