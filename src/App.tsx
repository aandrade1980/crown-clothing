import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

// Components
import { HomePage } from "./pages/homepage";
import Shop from "./pages/shop";
import { Header } from "./components/header";
import { SignInSignOutPage } from "./pages/sign-in-sign-out";

// Firebase
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

function App() {
  const [currentUser, setCurrentUser] = React.useState<Partial<
    firebase.User
  > | null>(null);

  React.useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth, {});

        userRef?.onSnapshot(snapShot => {
          setCurrentUser({ ...snapShot.data() });
        });
      } else setCurrentUser(null);
    });
  }, []);

  const handleSignOut = () => auth.signOut();

  return (
    <div>
      <Header currentUser={currentUser} signOut={handleSignOut} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route path="/signin" component={SignInSignOutPage} />
      </Switch>
    </div>
  );
}

export default App;
