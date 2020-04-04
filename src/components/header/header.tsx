import React from "react";

// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

// Component
import { CartIcon } from "../cart-icon";
import { CartDropdown } from "../cart-dropdown";

// Styled
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styles";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { IRootState } from "../../redux/types";

interface IHeaderProps {
  currentUser: Partial<firebase.User> | null;
  signOut: () => void;
  hidden: boolean;
}

const Header = ({ currentUser, signOut, hidden }: IHeaderProps) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={signOut}>
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
  currentUser: firebase.User;
  hidden: boolean;
}

const mapStateToProps = createStructuredSelector<IRootState, ConnectedProps>({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
