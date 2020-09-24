import React from 'react';
import './Subtotal.css';
import { useStateValue } from '../StateProvider';
import { getCartTotal } from '../reducer';
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
  const [{cart}, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText = {(value) => (
          <>
            <span>Subtotal ({cart.length} items): <strong>{`${value}`}</strong></span>
            <span className="subtotal__select">
              Choose method of payment:
              <select name="payment method">
                <option>M-Pesa</option>
                <option>MasterCard</option>
                <option>Paypal</option>
              </select>
            </span>
          </>
        )}

        decimalScale = {2}
        value = {getCartTotal(cart)}
        displayType= {"text"}
        thousandSeparator = {true}
        prefix = {"Ksh."}
      />
      <button>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal;
