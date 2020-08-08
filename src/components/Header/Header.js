import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

function Header() {
  const [state, setState] = React.useState({
    isOpen: false,
  });

  const toggle = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };

  return (
    <main className="header">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/home">
          O
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/home/cart">
                Shopping Cart
              </Link>
            </li>

            <li
              onClick={toggle}
              className={'nav-item dropdown ' + (state.isOpen ? 'show' : '')}
            >
              <span
                className="nav-link dropdown-toggle"
                id="dropdown01"
                data-toggle="dropdown"
              >
                Username
              </span>
              <div className="dropdown-menu" aria-labelledby="dropdown01">
                <Link className="dropdown-item" to="/home/orders">
                  My Orders
                </Link>
                <Link className="dropdown-item" to="/home/admin-orders">
                  Manage Orders
                </Link>
                <Link className="dropdown-item" to="/home/admin-products">
                  Manage Products
                </Link>
                <Link className="dropdown-item" to="/">
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </main>
  );
}

export default Header;
