import './App.css';
import Navbar  from './component/Navbar';
import Home from './component/Home';
import {Route} from 'react-router-dom';
import Products from './component/Products';
import Switch from "react-switch";
import Product from './component/Product';
import Cart from './component/Cart';
import About from './component/About';
import Contact from './component/Contact';



function App() {
  return (
    <>
      <Navbar/>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/products" component={Products}/>
      <Route exact path="/products/:id" component={Product}/>
      <Home/>
    </Switch>
     </>
  );
}

export default App;
