import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

// Components
import { CollectionOverviewContainer } from '../../components/collections-overview';
import { CollectionPageContainer } from '../collection';

interface IShopPage extends RouteComponentProps {
  fetchCollectionStartAsync: () => void;
}

export function ShopPage({ match, fetchCollectionStartAsync }: IShopPage) {
  React.useEffect(() => {
    fetchCollectionStartAsync();
  }, [fetchCollectionStartAsync]);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
