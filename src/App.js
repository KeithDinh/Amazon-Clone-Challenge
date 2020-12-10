import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import "./App.css";
import { auth } from "./firebase.js";
import { useStateValue } from "./StateProvider";

import Header from "./Header.js";
import Home from "./Home.js";
import Checkout from "./Checkout.js";
import Payment from "./Payment.js";
import Login from "./Login.js";
import Orders from "./Orders.js";

const promise = loadStripe(
  "pk_test_51HvyfVLfVIzmuxdUZWx4HIub33pkTLzS8W1Mt5FN4rwG5LG2GYMPp5M7DsErjVIqPBbtvGqaGhB67ri5Kiukxv2R00XlWABliG"
);
function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // run once when app component loads
    auth.onAuthStateChanged((authUser) => {
      // console.log("The user is ", authUser);
      if (authUser) {
        // logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
