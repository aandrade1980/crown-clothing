import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

// Component
import { CustomButton } from '../custom-button';
import CartItem from '../cart-item';

// Types
import { IRootState } from '../../redux/types';
import { IItem } from '../../models/collection';

import './cart-dropdown.scss';

interface ICartDropdownProps extends RouteComponentProps {
  cartItems: IItem[];
  dispatch: Dispatch;
}

const CartDropdown = ({ cartItems, history, dispatch }: ICartDropdownProps) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => <CartItem key={cartItem.id} {...cartItem} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = (state: IRootState) => ({
  cartItems: selectCartItems(state)
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
