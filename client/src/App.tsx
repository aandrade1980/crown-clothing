import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { selectCurrentUser } from './redux/user/user.selectors';
import { createStructuredSelector } from 'reselect';
import { checkUserSession } from './redux/user/user.actions';

// Components
import Header from './components/header';
import ErrorBoundary from './components/error-boundary/error-boundary';

import { IRootState, ICurrentUser } from './redux/types';

import { GlobalStyle } from './global.styles';

const HomePage = React.lazy(() => import('./pages/homepage'));
const ShopPage = React.lazy(() => import('./pages/shop'));
const CheckoutPage = React.lazy(() => import('./pages/checkoutpage'));
const SignInSignOutPage = React.lazy(() => import('./pages/sign-in-sign-out'));

interface IProps extends ConnectedProps {
  checkUserSession: () => void;
}

function App({ currentUser, checkUserSession }: IProps) {
  React.useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          {/* TODO: add a spinner component for the suspense fallback */}
          <React.Suspense fallback={<div>Loading...</div>}>
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route
              exact
              path="/signin"
              render={() =>
                currentUser ? <Redirect to="/" /> : <SignInSignOutPage />
              }
            />
          </React.Suspense>
        </ErrorBoundary>
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
