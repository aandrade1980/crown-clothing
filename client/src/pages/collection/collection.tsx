import React from "react";
import { RouteComponentProps } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

// Components
import { CollectionItem } from "../../components/collection-item";

import { IRootState } from "../../redux/types";
import { ICollection } from "../../models/collection";

import "./collection.scss";

interface ICollectionPage {
  collection: ICollection;
}

const CollectionPage = ({ collection }: ICollectionPage) => {
  const { title, items } = collection;
  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map(item => (
          <CollectionItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

interface OwnProps extends RouteComponentProps<TParams> {
  collection: ICollection;
}

type TParams = { collectionId: string };

const mapStateToProps = (state: IRootState, ownProps: OwnProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
