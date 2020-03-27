import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

// Components
import { HomePage } from "./pages/homepage";
import Shop from "./pages/shop";
import { Header } from "./components/header";
import { SignInSignOutPage } from "./pages/sign-in-sign-out";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signIn" component={SignInSignOutPage} />
      </Switch>
    </div>
  );
}

export default App;
