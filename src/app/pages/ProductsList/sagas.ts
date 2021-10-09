import { SagaIterator } from 'redux-saga';
import { takeLatest, call, put } from 'redux-saga/effects';
import { actions as productsListActions } from './slice';
import ServiceCall from '../../resources/helpers/ServiceCall';

export function* getAllProductsFromAPI() {
  try {
    const response = yield call(
      ServiceCall.get,
      `http://makeup-api.herokuapp.com/api/v1/products.json`,
      //{ product_tags: 'Canadian,Dairy Free' },
    );
    yield put(productsListActions.setProducts(response.data));
  } catch (error) {
    console.log(error);
  }
}

export function* productsListSagas(): SagaIterator {
  yield takeLatest(
    productsListActions.initProductsListPage.type,
    getAllProductsFromAPI,
  );
}
