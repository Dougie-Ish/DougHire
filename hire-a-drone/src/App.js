import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar/Navbar';
import Body from './Body/Body';
import Login from './Login/Login';
import Checkout from './Checkout/Checkout';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import CheckoutProductHire from './CheckoutProductHire';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect (() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch ({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    });

    return () => {
      unsubscribe();
    }
  }, [])

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/favourites"></Route>

          <Route path="/buy_checkout">
            <Navbar />
            <Checkout />
          </Route>

          <Route path="/hire_checkout">
            <Navbar />
            <CheckoutProductHire />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/">
            <Navbar />
            <Body />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
