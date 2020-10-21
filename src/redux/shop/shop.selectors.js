import memoize from "lodash.memoize";

import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollections = createSelector(
  //suggested variable was selectCollections
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

export const selectCollection = memoize((collectionUrlParam) =>
  createSelector([selectShopCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  )
);

export const selectAreCollectionsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);

export const selectAreCollectionsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.collections
);
