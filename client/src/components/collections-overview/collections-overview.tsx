import React from 'react';

// Components
import { CollectionPreview } from '../collection-preview';

// Types
import { ICollections } from '../../redux/types';

import './collections-overview.scss';

const CollectionsOverview = ({ collections }: ICollections) => (
  <div className="collections-overview">
    {collections.map(({ id, ...otherCollectionProps }) => (
      <CollectionPreview key={id} id={id} {...otherCollectionProps} />
    ))}
  </div>
);

export default CollectionsOverview;
