import React from 'react';
import './CheckoutProduct.css';
import RemoveShoppingCartOutlinedIcon from '@material-ui/icons/RemoveShoppingCartOutlined';
import { useStateValue } from './StateProvider';

function CheckOutProduct({ id, image, title, price }) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    // remove from cart...
    dispatch ({
      type: 'REMOVE_FROM_CART',
      id: id,
    });
  }
  return (
    <div className="checkoutproduct">
      <img className="checkoutproduct__image" src={image} alt="" />

      <div className="checkoutproduct__info">
        <span className="checkoutproduct__title">{title}</span>

        <span className="checkoutproduct__price">
          <small>Ksh.</small>
          <strong>{price}</strong>
        </span>

        <button onClick={removeFromCart}><RemoveShoppingCartOutlinedIcon /></button>
      </div>
    </div>
  )
}

export default CheckOutProduct;
