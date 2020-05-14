import React from 'react';   
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Product from './Pages/Product';
import Cart from './Pages/Cart';

function App() {
  return (
    <BrowserRouter>
      <Switch> 
          <Route exact path="/" component={Product} /> 
          <Route path="/Products" component={Product} /> 
          <Route path="/Cart" component={Cart} /> 
      </Switch> 
    </BrowserRouter>
  );
}

export default App;
