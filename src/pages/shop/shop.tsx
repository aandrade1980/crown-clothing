import React from "react";
import { Route, RouteComponentProps } from "react-router-dom";

// Redux
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { updateCollections } from "../../redux/shop/shop.actions";

// Components
import { CollectionsOverview } from "../../components/collections-overview";
import { CollectionPage } from "../collection";
import { WithSpinner } from "../../components/with-spinner";

// Firestore
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { ICollections, IRootState } from "../../redux/types";
import { selectCollectionsPreview } from "../../redux/shop/shop.selectors";
import { ICollection } from "../../models/collection";

interface IShopPage extends RouteComponentProps {
  updateCollections: (collectionMap: ICollections) => void;
  collections: ICollection[];
}

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

export function ShopPage({ match, updateCollections, collections }: IShopPage) {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      updateCollections(collectionsMap);
      setLoading(false);
    });
  }, [updateCollections]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => {
          console.log("SHOP PROPS => ", props);

          return (
            <CollectionsOverviewWithSpinner
              isLoading={loading}
              collections={collections}
              {...props}
            />
          );
        }}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner isLoading={loading} {...props} />
        )}
      />
    </div>
  );
}

const mapStateToProps = (state: IRootState) => ({
  collections: selectCollectionsPreview(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  updateCollections: (collectionsMap: ICollections) =>
    dispatch(updateCollections(collectionsMap)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
