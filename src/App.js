import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
// import Cart from './Cart/Cart';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import Shop from './components/Shop/Shop';


function App() {
  return (
    <div className="App">
 
    <BrowserRouter>
        
    <Header></Header>

 
      <Switch>

        <Route exact path="/">

        <Shop></Shop>
        
        </Route>


        <Route path="/shop">

        <Shop></Shop>

        </Route>


        <Route path="/orderreview">

        <OrderReview></OrderReview>

        </Route>


        <Route path="/inventory">

        <Inventory></Inventory>

        </Route>


        <Route path="/placeOrder">

        <PlaceOrder></PlaceOrder>

        </Route>


        <Route path="*">

        <NotFound></NotFound>

        </Route>


      </Switch>
    </BrowserRouter>



    </div>
  );
}

export default App;


// -------------------new route ja use korte hobe sob e not Found ar agy use korte hobe
//------------------ amra je components banai setar modde amra jsx use korte pari. and seta children hisebe kaj korbe. oita output dymic vhabe dekhate hole props.children hisebe use kora jete pare.

//----------------- amra react router k netlify te deploy korte chaile first public folder a _redirects name a file create kore oi file ar modde just -- /* /index.html 200 -- use korte hobe. --------------------