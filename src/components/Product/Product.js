import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css';
import Rating from 'react-rating';

const Product = (props) => {

  const {img, name, seller, price, stock, star } = props.product;
  /* const cartIcon = <FontAwesomeIcon icon={faCoffee} />
   <button>{cartIcon}add to cart</button>
   // ------ ai vhabew button ar modde variable set kore use kora jay.
 */
    return (
        <div className = "product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h2 className = "product-name">{name}</h2>
                <p> <small> by: {seller}</small></p>
                <p>${price}</p>
                <p>Only {stock} left in stock- order soon</p>
               <div className="rating">
               <Rating
                initialRating={star}

                        emptySymbol="far fa-star rating-color"
                        fullSymbol="fas fa-star rating-color"
                        >
                </Rating>
               </div>
                <br />

                <button 
                onClick = {() => props.handleAddToCart(props.product)
                } 
                className = "add-to-cart-button"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
            </div>
        </div>
    );
};

//------------------- product Container ar modde button add kora hoise and button a click korle Cart Container ar data update hobe. React ar data load hoy unidirectional. Upor theke data nishe pathite paba jabe but nish theke upore sohoje  uthano jabe na.Jehuto amra data cart ar modde dekhaite chai . tai event handler k je khane dekhabo tar kasa kasari akta state a rakbo. amon jaita event handler rakte hobe jekhan theke data access kora jabe.Shop.js file a event handler add kore dite hobe. Jehuto carter modde data pathaite hobe tai dynamic vhabe product ar event handler kw nite hobe. Because aita object,hardcoded data , event handler o pathaite parbo.And props hisebe object ,fuction etc sob je pathano jay.-------------------
// ------------------ onclick Anonymous function use kora hoise karon holo Anonymous function use na korle function button click ar agei call hoye jabe.---------------------------
// ------------------- Jodi kono event handler ar data pass korte hoy tobe (** jodi data pass kora na hoy ta hole just event handler ar name ta use korlei hobe.) parameter k pathanor jonno bracket ar modde likte hoy. Likte gele data gula aber auto  execute hoye jay. Ai auto execution off korar jonno akta Anonymous function use korte hoy. Ar fole button a click korle tobei function k call korbe and ai function ar modde ja ase ta execution hobe.   -----------------------------

export default Product;