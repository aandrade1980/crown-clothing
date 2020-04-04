import React from "react";

// Redux
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";

// Components
import { CheckoutItem } from "../../components/checkout-item";
import { StripeCheckoutButton } from "../../components/stripe-button";

import { IRootState } from "../../redux/types";

import { IItem } from "../../models/collection";

import "./checkoutpage.scss";

interface ConnectedProps {
  cartItems: IItem[];
  cartTotal: number;
}

const CheckoutPage: React.FC<ConnectedProps> = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${cartTotal}</span>
    </div>
    <StripeCheckoutButton price={cartTotal} />
  </div>
);

const mapStateToProps = createStructuredSelector<IRootState, ConnectedProps>({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);
