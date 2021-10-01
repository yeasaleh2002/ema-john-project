import React from 'react';
import useCart from '../../updatehooks/useCart';
import useProducts from '../../updatehooks/useProducts';
import Cart from '../Cart/Cart'
import ReviewItem from '../ReviewItem/ReviewItem';
import {removeFromDb} from '../../utilities/fakedb';

const OrderReview = () => {

const [products] = useProducts();
const [cart, setCart] = useCart(products);
const handleRemove = key => {
  const newCart = cart.filter(product => product.key !== key)
  setCart(newCart);
  
  removeFromDb(key);
} 



  return (
    <div className = "shop-container">
      <div className="product-container">
     {
       cart.map(product => <ReviewItem
        
        key={product.key}
        product={product}
        handleRemove = {handleRemove}
        >

        </ReviewItem>
        )
     }

      </div>


      <div className= "cart-container">
      <Cart cart={cart}></Cart>

      </div>





        {/* <h1>total products: {products.length}</h1>
        <h2>This is order review section.</h2>
        <h3>This is card: {cart.length}</h3> */}
    </div>
  );
};

export default OrderReview;


//---------- filter jekhane use kora hoise tar process , jehuto cart theke amra sorabo tai filter kore bola hoise pottekta porduct naw and jodi jei key ta k parameter hisebe pathano hoise oitar sate jodi mil na thake tahole seta k select koro. Orthat jeta mil khabe oita batil hoye jabe and je gula mil khaini se gula k newya hosce.