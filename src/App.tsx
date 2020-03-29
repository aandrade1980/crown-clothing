import React from "react";
import { Route, Switch } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";

// Components
import { HomePage } from "./pages/homepage";
import Shop from "./pages/shop";
import Header from "./components/header";
import { SignInSignOutPage } from "./pages/sign-in-sign-out";

// Firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

import "./App.css";

function App({ setCurrentUser }: any) {
  React.useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {});

        userRef?.onSnapshot(snapShot => {
          setCurrentUser({
            ...snapShot.data()
          });
        });
      } else setCurrentUser(userAuth);
    });
  }, [setCurrentUser]);

  const handleSignOut = () => auth.signOut();

  return (
    <div>
      <Header signOut={handleSignOut} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInSignOutPage} />
      </Switch>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: firebase.User) => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
