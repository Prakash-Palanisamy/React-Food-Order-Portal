import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from './components/Products';
import Cart from './components/Cart';

function App() {
  //const [cartItems] = CartItems();
  //console.log(cartItems.length);

  return (
    <>
       <div className='app'>
       <Router>
       <Header/>
        <Switch>
          <Route exact path="/">
             <Home/>
          </Route>   
          <Route exact path="/products">
             <Products/>
          </Route>    
          <Route exact path="/cartItems">
             <Cart/>
          </Route>     
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
