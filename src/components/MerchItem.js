import React from "react";
import PropTypes from "prop-types";


function MerchItem(props){
  
  function handleAddingItemToCart (event) {
    event.preventDefault();
    props.onNewItemCreation({
      onStock: event.target.issue.value
    })
  }

  return (
    <React.Fragment>
    <form onSubmit={handleAddingItemToCart}>
      <h2>{props.name}</h2>
      <ul>
        <li>Year: {props.year}</li>
        <li>Price: ${props.price}</li>
        <li>On stock: {props.onStock}</li>
      </ul>
    <button type="submit">Add to Cart</button>
    </form>
    </React.Fragment>
  )
}

MerchItem.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  price: PropTypes.string,
  onStock: PropTypes.number,
  handleAddingNewItemToCart: PropTypes.func
}
export default MerchItem;