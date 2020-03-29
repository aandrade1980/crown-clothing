import React from "react";
import { Link } from "react-router-dom";

// Redux
import { connect } from "react-redux";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { IRootState } from "../../redux/types";

import "./header.scss";

interface IHeaderProps {
  currentUser: Partial<firebase.User> | null;
  signOut: () => void;
}

const Header = ({ currentUser, signOut }: IHeaderProps) => {
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
      </div>
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser } }: IRootState) => ({
  currentUser
});

export default connect(mapStateToProps)(Header);
