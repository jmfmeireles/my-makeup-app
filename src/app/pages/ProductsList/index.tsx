import React, { useEffect, useRef } from 'react';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { actions as productsListActions, sliceKey, reducer } from './slice';
import { productsListSagas } from './sagas';
import { checkIfLoadingResultsFromAPI } from './selectors';
import { PageWrapper } from './components/style';
import Header from '../../components/Header';
import List from './components/List';
import Pagination from './components/Pagination';
import Filtering from './components/Filtering';
import { LoadingIndicator } from 'app/components/LoadingIndicator';

export function ProductsList() {
  const { t } = useTranslation();
  const refTop = useRef<HTMLDivElement>(null);
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({
    key: sliceKey,
    saga: productsListSagas,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productsListActions.initProductsListPage());
  }, [dispatch]);

  const isLoading: boolean = useSelector(checkIfLoadingResultsFromAPI);

  return (
    <>
      <Helmet>
        <title>{t('productsListPage.title')}</title>
        <meta name="description" content={t('productsListPage.description')} />
      </Helmet>
      <Header />
      <>
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <PageWrapper ref={refTop}>
            <Filtering />
            <List />
            <Pagination refToPageTop={refTop} />
          </PageWrapper>
        )}
      </>
    </>
  );
}
