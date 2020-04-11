import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectIsCollectionFetching,
  selectCollectionsPreview
} from '../../redux/shop/shop.selectors';
import { compose } from 'redux';

// Components
import { WithSpinner } from '../with-spinner';
import CollectionsOverview from './collections-overview';

import { IRootState } from '../../redux/types';
import { ICollection } from '../../models/collection';

interface ConnectedProps {
  isLoading: boolean;
  collections: ICollection[];
}

const mapStateToProps = createStructuredSelector<IRootState, ConnectedProps>({
  isLoading: selectIsCollectionFetching,
  collections: selectCollectionsPreview
});

export const CollectionOverviewContainer = compose<React.ComponentType<any>>(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);
