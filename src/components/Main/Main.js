import React from 'react';
import './Main.scss';
import Home from '../../pages/Home/Home';
import Products from '../../pages/Products/Products';
import AdminProducts from '../../pages/Products/AdminProduct';
import { Route, Switch } from 'react-router';
import Checkout from '../../pages/Checkout/Checkout';
import ShoppingCart from '../../pages/ShoppingCart/ShoppingCart';
import Orders from '../../pages/Orders/Orders';
import AdminOrders from '../../pages/Orders/AdminOrders';

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/products" component={Products}></Route>
        <Route path="/admin-products" component={AdminProducts}></Route>
        <Route path="/orders" component={Orders}></Route>
        <Route path="/admin-orders" component={AdminOrders}></Route>
        <Route path="/cart" component={ShoppingCart}></Route>
        <Route path="/checkout" component={Checkout}></Route>
      </Switch>
    </div>
  );
}

export default Main;
