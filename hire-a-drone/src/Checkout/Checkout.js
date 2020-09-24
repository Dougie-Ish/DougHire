import React, { useEffect } from 'react';
import './Checkout.css';
import { useStateValue } from '../StateProvider';
import CheckOutProduct from '../CheckoutProduct';
import Subtotal from '../Subtotal/Subtotal';

function Checkout() {
  const [{ cart }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        {cart?.length === 0 ? (
          <div className="checkout__leftContent">
            <h3>Your Cart is Empty</h3>
            <span>Click on the Cart icon to add items to your Shopping Cart</span>
          </div>
        ) : (
          <div>
            <font className="checkout__title">Your Shopping Cart</font>
            
            {cart.map(item => (
              <CheckOutProduct 
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        )}
      </div>
      {cart.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  )
}

export default Checkout;
