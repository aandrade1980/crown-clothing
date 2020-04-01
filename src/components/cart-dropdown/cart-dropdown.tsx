import React from "react";

// Redux
import { connect } from "react-redux";

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

const mapStateToProps = ({ cart: { cartItems } }: IRootState) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
