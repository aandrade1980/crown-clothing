import React from "react";

// Redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { IRootState } from "../../redux/types";

import "./cart-icon.scss";
import { IItem } from "../../models/collection";

interface IProps {
  toggleCartHidden: () => void;
  cartItems: IItem[];
}

const CartIcon = ({ toggleCartHidden, cartItems }: IProps) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> {cartItems.length} </span>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }: IRootState) => ({
  cartItems
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
