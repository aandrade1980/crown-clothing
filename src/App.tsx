import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';

// Components
import { HomePage } from './pages/homepage';
import Shop from './pages/shop';
import Header from './components/header';
import { SignInSignOutPage } from './pages/sign-in-sign-out';
import { CheckoutPage } from './pages/checkoutpage';

import { IRootState, ICurrentUser } from './redux/types';

import './App.css';

interface IProps extends ConnectedProps {
  checkUserSession: () => void;
}

function App({ currentUser, checkUserSession }: IProps) {
  React.useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <Header />
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
