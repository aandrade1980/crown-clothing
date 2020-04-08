import {
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_FAIL
} from './shop.types';

import { ICollections } from '../types';

export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collectionMap: ICollections) => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionMap
});

export const fetchCollectionsFail = (errorMessage: string) => ({
  type: FETCH_COLLECTIONS_FAIL,
  payload: errorMessage
});
