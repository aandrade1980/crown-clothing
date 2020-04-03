import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { selectCollectionsPreview } from "../../redux/shop/shop.selectors";

// Components
import { CollectionsOverview } from "../../components/collections-overview";
import { CollectionPage } from "../collection";

import { IRootState } from "../../redux/types";
import { ICollection } from "../../models/collection";

interface IShopPage extends RouteComponentProps {
  collections: ICollection[];
}

export function ShopPage({ collections, match }: IShopPage) {
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={() => <CollectionsOverview collections={collections} />}
      />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
}

const mapStateToProps = (state: IRootState) => ({
  collections: selectCollectionsPreview(state)
});

export default connect(mapStateToProps)(ShopPage);
