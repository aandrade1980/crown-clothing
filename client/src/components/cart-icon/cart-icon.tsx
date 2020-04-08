import React from "react";

// Redux
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import { IRootState } from "../../redux/types";

import "./cart-icon.scss";

interface IProps {
  toggleCartHidden: () => void;
  itemCount: number;
}

const CartIcon = ({ toggleCartHidden, itemCount }: IProps) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count"> {itemCount} </span>
  </div>
);

const mapStateToProps = (state: IRootState) => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
