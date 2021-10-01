import React from 'react';
import './Cart.css';

const Cart = (props) => {

  const {cart} = props;
  
  let totalQuantity = 0;
  let total = 0;
  for(const product of cart) {
    if(!product.quantity) {
        product.quantity = 1;
    }
      total = total + product.price * product.quantity;
      totalQuantity = totalQuantity + product.quantity;
  }
 


  // ----------------other way to solve total
//   const total = cart.reduce((previous, product) => previous + product.price, 0);


/* //--------------- other way
const totalReducer = (previous, product) => previous + product.price;
const total = cart.reduce(totalReducer, 0);
 */

const shipping = total > 0 ? 15: 0 ;
const tax = (total + shipping) * (10/100);
const grandTotal = total + shipping + tax;

    return (
        <div>
            <h2>Order Summary</h2>
            <h4>Item Ordered: {totalQuantity} </h4>
            <br />
            <p>Total: ${total.toFixed(2)}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
            {props.children}

            {/* Kono akta component je khane amra use kortechi, tar pet ar modde amra jai kori na kno seta amra cart ar modde dekhaite pari. AND jei jaiga dekhabo sekhane dynamic vhabe bole dite hobe {props.children}. taholei aita kaj korbe.  */}

        </div>
    );
};

export default Cart;

// ------------------------ dynamic vhabe output paite hole obosoi <Cart></Cart> tag ar modde theke akta property pathaite hobe. and aita value hobe somporno cart state kei pathai dite hobe.