import React from 'react';
import './App.scss';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/Shared/PrivateRoute';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <PrivateRoute path="/" component={Home}></PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
