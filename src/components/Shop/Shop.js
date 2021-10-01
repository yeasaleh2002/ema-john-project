import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {

  const [products, setProducts] = useState([]); 
  const [cart, setCart] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);

   useEffect (() => {
    //    console.log('product api called')
         fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON')
         .then(res => res.json())
        //  .then(data => setProducts(data)) -------// aita multiline o lekha jabe.
         .then(data =>{
              setProducts(data);
              setDisplayProducts(data);
            })
        //  console.log('product received');
   }, []);

   useEffect(() => {
    //    console.log('local storage called');
       if(products.length) {
        const savedCart = getStoredCart();
        const storedCart = [];
        for(const key in savedCart) {
            const addedProduct = products.find(product => product.key === key);

          if(addedProduct) {
              const quantity = savedCart[key];
              addedProduct.quantity = quantity;
              storedCart.push(addedProduct);
          }
         }
         setCart(storedCart);
       }
   }, [products])
   //-------------- cart a jokon data add kori tokon full product k add kori. ja handleAddToCart ar maddome kora hoise. KONO karon a local storage a full object k rakha thik hoy nai sei jonno only product ar key k rakha hoise. Akon user a purber use onosare local storage theke data aber cart a add korte hobe. Orthat key theke reverse way te product k ber nite hobe.------------------
   //------------- array of object theke kono particular object pete hole 2 ta method ase. filter(je jinis ta dibo oitar sate joto gula matching pabe toko gula output dibe. ) and find(find use korle jodi oi item k peye thake tobe just oi ta k dibe and jodi item na thake to undefind dekhabe.). || amra find use korbo. Pottekta loop kore kore akta key astecilo. and oi object ar key gula k naw. newyar pore pottekta key ar jonno joto gula product ase, se khane ota k loop thoraw korte hobe. and key ase amon product khujbe.  -------------------

   const handleAddToCart = (product) => {

    // fixed quantity
    const exists = cart.find(pd => pd.key === product.key);
    let newCart = [];

    if(exists) {
        const rest = cart.filter(pd => pd.key !== product.key);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, product]
    }

    else{
        product.quantity = 1;
        newCart = [...cart, product]
    }
       setCart(newCart);

       //---------------------------- new cart ar value hobe Existing(viddoman) je cart ase tar sob gula element k gula k copy korte hobe.COPY korar opay holo spread oprator(...)cart use korte hobe. ate cart ar modde joto gula product ase thaklo and na thakle nai. jodi incase theke tobe se gula k agy upadan hisebe bosate hobe. and ...cart ar por comma(,) diya event handler ar je parameter thakbe seta bosate hobe. tahole essentially notun akta array declare kora hosse , je khane ager cart ar element gula rakha hosse  and notun jaiga jog kora hosse product. AKDOM first a ...cart a kono kiso thakbe na se jonno akta hobe and aste aste product jog hobe. and sob ses a setCart(newCart) call kore dite hobe.ATE NOTUN VHABE CART ADD HOYE JABE.---------------------------
       //---------------------------- Ai new array ta je vhabe kaj korbe seta holo jodi amra kono akta button a click kori tahole seta handleAddProduct ar parameter a modde cole jabe, and apor newCart ar modde bose ata const[cart, setCart] = useState([]); ar  modde giya jog hoye jabe. And jekhane update korte bola hoise se khane update hoye jabe.--------------------------------------
       //---------------------------- je huto cart ar modde aro data set korte hobe tai ar akta component banai nite hobe. jehuto cart shop ar modde tai shop component ar child hisebe use kora hobe.-----------------
      // ----------------------------- State je khane thakbe event handler o sei khanei thakbe. --------------------------


    // -------******* Save to local Stroage (for now) *********------------//
    addToDb(product.key);

   }

   /* ----------------------------
     * Search button wise result ber korar 4ta upay holo.
     =>
      1. search input field banate hobe.
      2. event handler use korte hobe. React ar event hander ar name holo onChange ={} .
      3. available je result ase search korle filter kore sei result ber korte hobe.
      4. search result moto output ui te dekhate hobe. jehuto search result change hoite pare tai search result ar jonno alada alada state use korte hobe. Initial search ar somoy product ar sate display product kw dekhabe.
    ----------------------------*/
 
    const handleSearch = event => {
        const searchText = event.target.value;
        const matchedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));
        setDisplayProducts(matchedProducts);
    }
   

    return (
        <div>
            <div className='search-container'>
                <input type="text"
                onChange = {handleSearch}
                 placeholder="Search product" 
                 />
            </div>

        <div className="shop-container">
            <div className="product-container">
                 <h3>Products: {products.length}</h3>
                 {
                     displayProducts.map(product => <Product 
                        key = {product.key}
                        product = {product}
                        handleAddToCart = {handleAddToCart}
                     >

                     </Product> )
                 }
            </div>
            <div className="cart-container">
                <Cart cart = {cart}>
                     <Link to="/orderReview">
                     <button className="add-to-cart-button">Review Your Order</button>
                     </Link>
                </Cart>
            </div>
     
        </div>
        </div>

    );
};

export default Shop;

// ------------------------- cart ar modde data akber dewya hole , ata jodi porobortite change kora hoy tobe ata k sorasori push and pop kora jabe na.ata k immutable rakte hobe. immutable mane holo ata change hobe na. Orthat array ar modde push and pop korte parbo na. Ata change korte hobe array ar moto copy arekta banate hobe.
// --------------------------useEffect ar 2nd parameter a jodi empty array thake tahole ai function ta k joto ber toto ber colbe, ar jodi aita dependency dewya hooy orthat kono property use kora hoy then joto ber function call kora hobe toto ber e [products] aitaw call hobe. Amon ta hole onek problem hobe. tai always(99%) [] empty array use kora ucit.  --------------------