import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loginActions } from '../../store/login/actions';

function Header() {
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    isOpen: false,
  });

  const toggle = () => {
    setState({ ...state, isOpen: !state.isOpen });
  };

  function logout(e) {
    dispatch(loginActions.logout());
  }

  return (
    <main className="header">
      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
        <Link className="navbar-brand" to="/">
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
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
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
                <Link className="dropdown-item" to="/orders">
                  My Orders
                </Link>
                <Link className="dropdown-item" to="/admin-orders">
                  Manage Orders
                </Link>
                <Link className="dropdown-item" to="/admin-products">
                  Manage Products
                </Link>
                <Link className="dropdown-item" to="" onClick={logout}>
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
