import { Dispatch } from 'redux';

import {
  FETCH_COLLECTIONS_SUCCESS,
  FETCH_COLLECTIONS_START,
  FETCH_COLLECTIONS_FAIL
} from './shop.types';

import { ICollections } from '../types';

import {
  firestore,
  convertCollectionsSnapshotToMap
} from '../../firebase/firebase.utils';

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

export const fetchCollectionsStartAsync = () => {
  return (dispath: Dispatch) => {
    const collectionRef = firestore.collection('collections');
    dispath(fetchCollectionsStart());

    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispath(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispath(fetchCollectionsFail(error.message)));
  };
};
