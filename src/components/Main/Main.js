import React from 'react';
import { Route, Switch } from 'react-router';
import './Main.scss';
import Products from '../../pages/Products';
import AdminProducts from '../../pages/AdminProduct';
import Checkout from '../../pages/Checkout';
import ShoppingCart from '../../pages/ShoppingCart';
import Orders from '../../pages/Orders';
import AdminOrders from '../../pages/AdminOrders';

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Products}></Route>
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
