import { PayloadAction } from 'typesafe-actions';
import { createSlice } from 'utils/@reduxjs/toolkit';
import Products from './resources/helpers/Products';
import SessionStorage from './resources/helpers/SessionStorage';
import { MakeupProduct, ProductsListState } from './types';

export const initialState: ProductsListState = {
  isCallingAPI: false,
  products: [],
  pagination: {
    page: 0,
    elementsPerPage: 12,
    numberOfPossibleResults: 0,
  },
  filters: {
    productTags: [],
  },
};

const productsListSlice = createSlice({
  name: 'productsList',
  initialState,
  reducers: {
    /**
     * Start action of this page, which sets the product tags based on the session storage
     * and triggers a saga to get the products from API
     */
    initProductsListPage(state: ProductsListState) {
      state.pagination = initialState.pagination;
      state.isCallingAPI = true;
      state.filters.productTags = SessionStorage.getProductTags();
    },
    /**
     * Action triggered after a successfull call to get products from API
     */
    setProducts(
      state: ProductsListState,
      action: PayloadAction<string, MakeupProduct[]>,
    ) {
      state.isCallingAPI = false;
      state.products = action.payload;
      state.pagination.numberOfPossibleResults =
        Products.getNumberOfProductsAfterFiltering(
          action.payload,
          state.filters.productTags,
        );
    },
    /****************************PAGINATION ****************************************/
    setPage(state: ProductsListState, action: PayloadAction<string, number>) {
      state.pagination.page = action.payload;
    },
    /****************************PRODUCT TAGS ****************************************/
    setProductTags(
      state: ProductsListState,
      action: PayloadAction<string, string[]>,
    ) {
      state.filters.productTags = action.payload;
      SessionStorage.setProductTags(action.payload);
      //number of possible results must be set based on the applied filters
      state.pagination = {
        ...initialState.pagination,
        numberOfPossibleResults: Products.getNumberOfProductsAfterFiltering(
          state.products,
          action.payload,
        ),
      };
    },
    removeProductTag(
      state: ProductsListState,
      action: PayloadAction<string, string>,
    ) {
      const optionToRemove = action.payload;
      state.filters.productTags = state.filters.productTags.filter(
        tag => tag !== optionToRemove,
      );
      SessionStorage.setProductTags(state.filters.productTags);
      //number of possible results must be set based on the applied filters
      state.pagination = {
        ...initialState.pagination,
        numberOfPossibleResults: Products.getNumberOfProductsAfterFiltering(
          state.products,
          state.filters.productTags,
        ),
      };
    },
    clearAllProductTags(state: ProductsListState) {
      state.filters.productTags = [];
      SessionStorage.clearProductTags();
      //number of possible results will be the length of the initial set
      state.pagination = {
        ...initialState.pagination,
        numberOfPossibleResults: state.products.length,
      };
    },
  },
});

export const { actions, reducer, name: sliceKey } = productsListSlice;
