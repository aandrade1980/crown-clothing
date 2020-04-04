import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Redux
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from "reselect";

// Components
import { HomePage } from "./pages/homepage";
import Shop from "./pages/shop";
import Header from "./components/header";
import { SignInSignOutPage } from "./pages/sign-in-sign-out";
import { CheckoutPage } from "./pages/checkoutpage";

// Firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import { IRootState } from "./redux/types";

import "./App.css";

interface IProps extends ConnectedProps {
  setCurrentUser: (user: firebase.User | null) => void;
}

function App({ setCurrentUser, currentUser }: IProps) {
  React.useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {});

        userRef?.onSnapshot((snapShot: firebase.firestore.DocumentData) => {
          setCurrentUser({
            ...snapShot.data()
          });
        });
      } else setCurrentUser(null);
    });
  }, [setCurrentUser]);

  const handleSignOut = () => auth.signOut();

  return (
    <div>
      <Header signOut={handleSignOut} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignInSignOutPage />
          }
        />
      </Switch>
    </div>
  );
}

interface ConnectedProps {
  currentUser: firebase.User;
}

const mapStateToProps = createStructuredSelector<IRootState, ConnectedProps>({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: (user: firebase.User | null) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
