import React from "react";

import { ICollection } from "../../models/collection";

import { SHOP_DATA } from "./shop.data";

// Components
import { CollectionPreview } from "../../components/collection-preview";

interface IProps {}

interface IState {
  collections: ICollection[];
}

export default class ShopPage extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} id={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
