import React from 'react';
import './Product.css';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useStateValue } from './StateProvider';

function Product({ id, image, title, price, hirePrice}){
  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
    // adding item to cart
    dispatch ({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        image: image,
        title: title,
        price: price,
      },
    })
  };

  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="product__info">
        <span>{title}</span>
        <span className="product__price">
          <small>Ksh.</small>
          <strong>{price}</strong>
        </span>
        <span className="product__hirePrice">
          <small>Ksh.</small>
          <font>{hirePrice}</font>/ hr
          (If you want to hire)
        </span>
      </div>
      <div className="product__buttons">
        <button onClick={addToCart} className="button-one"><AddShoppingCartIcon /></button>
        <button className="button-two">Hire Drone</button>
      </div>
    </div>
  )
}

export default Product;
