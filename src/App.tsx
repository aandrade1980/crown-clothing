import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';

// Components
import { HomePage } from './pages/homepage';
import Shop from './pages/shop';
import Header from './components/header';
import { SignInSignOutPage } from './pages/sign-in-sign-out';
import { CheckoutPage } from './pages/checkoutpage';

// Firebase
import { auth } from './firebase/firebase.utils';

import { IRootState, ICurrentUser } from './redux/types';

import './App.css';

interface IProps extends ConnectedProps {}

function App({ currentUser }: IProps) {
  React.useEffect(() => {
    // const unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth, {});
    //     userRef?.onSnapshot((snapShot: firebase.firestore.DocumentData) => {
    //       setCurrentUser({
    //         ...snapShot.data()
    //       });
    //     });
    //   } else setCurrentUser(null);
    // });
    // return unsubscribeFromAuth();
  }, []);

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
  currentUser: ICurrentUser;
}

const mapStateToProps = createStructuredSelector<IRootState, ConnectedProps>({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(App);
