import * as React from 'react';

import { useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

import { MasterHeadWrapper, Title, SubTitle, ShopButton } from './styles';

export default function MasterHead() {
  const history = useHistory();
  const { t } = useTranslation();

  return (
    <MasterHeadWrapper>
      <Title>{t('app.title')}</Title>
      <SubTitle>{t('app.description')}</SubTitle>
      <ShopButton variant="outlined" onClick={() => history.push('/products')}>
        {t('homePage.shopNowButton')}
      </ShopButton>
    </MasterHeadWrapper>
  );
}
