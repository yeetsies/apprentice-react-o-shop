import React from 'react';
import './Main.scss';
import Switch from 'react-bootstrap/esm/Switch';
import Products from '../../pages/Products/Products';
import AdminProducts from '../../pages/Products/AdminProduct';
import Checkout from '../../pages/Checkout/Checkout';
import ShoppingCart from '../../pages/ShoppingCart/ShoppingCart';
import Orders from '../../pages/Orders/Orders';
import AdminOrders from '../../pages/Orders/AdminOrders';
import { Route } from 'react-router';

function Main() {
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Products}></Route>
        <Route exact path="/home" component={Products}></Route>
        <Route path="/home/products" component={Products}></Route>
        <Route path="/home/admin-products" component={AdminProducts}></Route>
        <Route path="/home/orders" component={Orders}></Route>
        <Route path="/home/admin-orders" component={AdminOrders}></Route>
        <Route path="/home/cart" component={ShoppingCart}></Route>
        <Route path="/home/checkout" component={Checkout}></Route>
      </Switch>
    </div>
  );
}

export default Main;
