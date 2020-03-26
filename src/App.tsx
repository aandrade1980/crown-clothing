import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

// Components
import { HomePage } from "./pages/homepage";

const HatPage = () => <div>HAT PAGE</div>;

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
