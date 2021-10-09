import * as React from 'react';

import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { PageWrapper } from './components/styles';
import MasterHead from './components/MasterHead';
import Grid from './components/Grid';

export function HomePage() {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t('homePage.title')}</title>
        <meta name="description" content={t('homePage.description')} />
      </Helmet>
      <PageWrapper>
        <MasterHead />
        <Grid />
      </PageWrapper>
    </>
  );
}
