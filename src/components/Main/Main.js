import React from 'react';
import './Main.scss';
import Products from '../../pages/Products/Products';
import AdminProducts from '../../pages/Products/AdminProduct';
import Checkout from '../../pages/Checkout/Checkout';
import ShoppingCart from '../../pages/ShoppingCart/ShoppingCart';
import Orders from '../../pages/Orders/Orders';
import AdminOrders from '../../pages/Orders/AdminOrders';
import { Route, Switch } from 'react-router';

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Products}></Route>
        <Route exact path="/products" component={Products}></Route>
        <Route exact path="/admin-products" component={AdminProducts}></Route>
        <Route exact path="/orders" component={Orders}></Route>
        <Route exact path="/admin-orders" component={AdminOrders}></Route>
        <Route exact path="/cart" component={ShoppingCart}></Route>
        <Route exact path="/checkout" component={Checkout}></Route>
      </Switch>
    </div>
  );
}

export default Main;
