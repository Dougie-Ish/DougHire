import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { auth } from '../firebase';
import logo from '../img/logo.png';
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
// import { name } from '../Login/Login';

function Navbar(){
  const [state, setstate] = useState(false);

  function handleClick() {
    setstate({clicked: !state.clicked})
  }
  
  console.log({user});

  const [{ cart, user }] = useStateValue();

  const login = () => {
    if (user) {
      auth.signOut();
    }
  }

  return (
    <nav className="header">
        {/* Logo */}
        <Link to="/">
            <img 
              className="header__logo"
              src={logo}
              alt=""
            />
          </Link>
          
        {/* Main Links */}
        <div className={state.clicked ? "header__mainlinksClicked" : "header__mainlinks"}>
          <div className={state.clicked ? "header__rightsideClicked" : "header__rightside"}>
            {/* Links - checkout*2, signin */}
            
            <Link to="/buy_checkout" className="header__link">
              <div className="header__cart">
                <ShoppingCartOutlinedIcon className="header__icon" />
                <span className="header__span">{cart?.length}</span>
                {/* <span className="header__span">0</span> */}
              </div>
            </Link>

            <Link to="/hire_checkout" className="header__link">
              <div className="header__cartHire">
                <span>Hire Checkout</span>
              </div>
            </Link>

            <Link to={!user && "/login"} className="header__link header__loginLink">
              <div onClick={login} className="header__login">
                <span>{user? 'Sign Out' : 'Log In'}</span>
                {/* <span className="header__span">Log In</span> */}
              </div>
            </Link>

            <div className="header__link">
              <div onClick={login} className="header__name">
                {console.log("user is", user)}
                <span>Hi, {user?.email}</span>
                <span>Hi, Name</span>
              </div>
            </div>

          </div>
        </div>
        
        {/* Menu Icon */}
        <div className="header__menuIconContainer" onClick={handleClick}>
            {state.clicked ? <CloseIcon /> : <MenuIcon />}
        </div>
      </nav>
  )
}

export default Navbar;
