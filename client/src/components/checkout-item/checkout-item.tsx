import React from "react";

// Redux
import { connect } from "react-redux";
import { Dispatch } from "redux";
import {
  removeItem,
  addItem,
  clearItemFromCart
} from "../../redux/cart/cart.actions";

import { IItem } from "../../models/collection";

import "./checkout-item.scss";

interface IProps {
  cartItem: IItem;
  dispatch: Dispatch;
}

const CheckoutItem: React.FC<IProps> = ({
  cartItem,
  cartItem: { name, imageUrl, price, quantity, id },
  dispatch
}) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">
      <div className="arrow" onClick={() => dispatch(removeItem(cartItem))}>
        &#10094;
      </div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={() => dispatch(addItem(cartItem))}>
        &#10095;
      </div>
    </span>
    <span className="price">{price}</span>
    <div
      className="remove-button"
      onClick={() => dispatch(clearItemFromCart(id))}
    >
      &#10005;
    </div>
  </div>
);

export default connect(null)(CheckoutItem);
