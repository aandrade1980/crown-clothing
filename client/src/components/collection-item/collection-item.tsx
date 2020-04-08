import React from "react";

import { IItem } from "../../models/collection";

// Redux
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";

// Components
import { CustomButton } from "../custom-button";

import "./collection-item.scss";

interface IAddItem {
  addItem: (item: IItem) => void;
}

const CollectionItem: React.FC<IItem & IAddItem> = ({
  id,
  name,
  price,
  imageUrl,
  quantity,
  addItem
}) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <CustomButton
      inverted
      onClick={() => addItem({ id, name, price, imageUrl, quantity })}
      isAddToCart
    >
      {" "}
      Add to Cart{" "}
    </CustomButton>
  </div>
);

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (item: IItem) => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);
