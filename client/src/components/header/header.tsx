import React from 'react';

// Redux
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { signOutStart } from '../../redux/user/user.actions';

// Component
import { CartIcon } from '../cart-icon';
import { CartDropdown } from '../cart-dropdown';

// Styled
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header.styles';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { IRootState, ICurrentUser } from '../../redux/types';

interface IHeaderProps {
  currentUser: ICurrentUser;
  signOutStart: () => void;
  hidden: boolean;
}

const Header = ({ currentUser, signOutStart, hidden }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOutStart}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

interface ConnectedProps {
  currentUser: ICurrentUser;
  hidden: boolean;
}

const mapStateToProps = createStructuredSelector<IRootState, ConnectedProps>({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
