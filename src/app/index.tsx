/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from '../styles/global-styles';

import { HomePage } from './pages/HomePage/Loadable';
import { ProductsList } from './pages/ProductsList/Loadable';
import { NotFoundPage } from './pages/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';

export function App() {
  const { i18n, t } = useTranslation();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate={`%s - ${t('app.title')}`}
        defaultTitle={t('app.title')}
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content={t('app.title')} />
      </Helmet>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + '/'} component={HomePage} />
        <Route
          exact
          path={process.env.PUBLIC_URL + '/products'}
          component={ProductsList}
        />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </BrowserRouter>
  );
}
