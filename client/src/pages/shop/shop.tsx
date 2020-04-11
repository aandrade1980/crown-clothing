import React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

// Redux
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

// Components
import { CollectionPageContainer } from '../collection';

const CollectionOverviewContainer = React.lazy(() =>
  import('../../components/collections-overview')
);

interface IShopPage extends RouteComponentProps {
  fetchCollectionsStart: () => void;
}

function ShopPage({ match, fetchCollectionsStart }: IShopPage) {
  React.useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className="shop-page">
      <React.Suspense fallback={<div>Loading...</div>}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </React.Suspense>
    </div>
  );
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AnyAction>) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);
