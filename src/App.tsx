import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

// Components
import { HomePage } from "./pages/homepage";
import Shop from "./pages/shop";
import { Header } from "./components/header";
import { SignInSignOutPage } from "./pages/sign-in-sign-out";

import { auth } from "./firebase/firebase.utils";

interface IProps {}

interface IState {
  currentUser: firebase.User | null;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      currentUser: null
    };
  }

  handleSignOut = () => auth.signOut();

  componentDidMount() {
    auth.onAuthStateChanged(user => this.setState({ currentUser: user }));
  }

  componentWillMount() {
    this.handleSignOut();
  }

  render() {
    return (
      <div>
        <Header
          currentUser={this.state.currentUser}
          signOut={this.handleSignOut}
        />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={Shop} />
          <Route path="/signin" component={SignInSignOutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
