import React from "react";

// Redux
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

// Component
import { CustomButton } from "../custom-button";
import { CartItem } from "../cart-item";

import { IRootState } from "../../redux/types";
import { IItem } from "../../models/collection";

import "./cart-dropdown.scss";

interface ICartDropdownProps {
  cartItems: IItem[];
}

const CartDropdown = ({ cartItems }: ICartDropdownProps) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} {...cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = (state: IRootState) => ({
  cartItems: selectCartItems(state)
});

export default connect(mapStateToProps)(CartDropdown);
