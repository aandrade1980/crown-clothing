import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

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

import { IRootState } from "./redux/types";

import "./App.css";

interface IProps {
  setCurrentUser: (user: firebase.User | null) => void;
  currentUser: firebase.User | null;
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

const mapStateToProps = ({ user: { currentUser } }: IRootState) => ({
  currentUser
});

const mapDispatchToProps = (dispatch: any) => ({
  setCurrentUser: (user: firebase.User | null) => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
