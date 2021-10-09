import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../../../types';
import { initialState } from './slice';
import Products from './resources/helpers/Products';

const productsListState = (state: RootState) =>
  state.productsList || initialState;

export const checkIfLoadingResultsFromAPI = createSelector(
  [productsListState],
  productsListState => productsListState.isCallingAPI,
);

export const getProductsToShow = createSelector(
  [productsListState],
  productsListState => {
    const pageOfProducts = Products.getPageOfProducts(
      productsListState.products,
      productsListState.filters.productTags,
      productsListState.pagination,
    );
    return pageOfProducts;
  },
);

export const getProductTagsToFilter = createSelector(
  [productsListState],
  productsListState => productsListState.filters.productTags,
);

export const getPaginationInfo = createSelector(
  [productsListState],
  productsListState => productsListState.pagination,
);
