import { connect } from 'react-redux';
import { compose } from 'redux';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { createStructuredSelector } from 'reselect';

// Components
import { WithSpinner } from '../../components/with-spinner';
import { CollectionPage } from './';

// Types
import { IRootState } from '../../redux/types';

interface ConnectedProps {
  isLoading: boolean;
}

const mapStateToProps = createStructuredSelector<IRootState, ConnectedProps>({
  isLoading: (state: IRootState) => !selectIsCollectionsLoaded(state)
});

export const CollectionPageContainer = compose<React.ComponentType<any>>(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);
