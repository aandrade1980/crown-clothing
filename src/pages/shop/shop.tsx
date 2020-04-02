import React from "react";

// Redux
import { connect } from "react-redux";
import { selectCollections } from "../../redux/shop/shop.selectors";

// Components
import { CollectionsOverview } from "../../components/collections-overview";

import { IRootState, ICollections } from "../../redux/types";

export function ShopPage({ collections }: ICollections) {
  return (
    <div className="shop-page">
      <CollectionsOverview collections={collections} />
    </div>
  );
}

const mapStateToProps = (state: IRootState) => ({
  collections: selectCollections(state)
});

export default connect(mapStateToProps)(ShopPage);
