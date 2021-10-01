import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
// import Cart from './Cart/Cart';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
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


        <Route path="*">

        <NotFound></NotFound>

        </Route>


      </Switch>
    </BrowserRouter>



    </div>
  );
}

export default App;
