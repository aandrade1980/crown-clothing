import React from "react";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

// Component
import { CartIcon } from "../cart-icon";
import { CartDropdown } from "../cart-dropdown";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { IRootState } from "../../redux/types";

import "./header.scss";

interface IHeaderProps {
  currentUser: Partial<firebase.User> | null;
  signOut: () => void;
  hidden: boolean;
}

const Header = ({ currentUser, signOut, hidden }: IHeaderProps) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          SHOP
        </Link>
        <Link to="/shop" className="option">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={signOut}>
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
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
