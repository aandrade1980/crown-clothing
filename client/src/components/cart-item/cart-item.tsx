import React from 'react';

import { IItem } from '../../models/collection';

import './cart-item.scss';

const CartItem = ({ imageUrl, price, name, quantity }: IItem) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item" />
    <div className="item-deta">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} ${price}
      </span>
    </div>
  </div>
);

export default React.memo(CartItem);
