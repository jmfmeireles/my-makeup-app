import React from 'react';

import { useTranslation } from 'react-i18next';

import { GridWrapper, Photo, PhotoLips } from './styles';
import brushes from './assets/brushes.png';
import lips from './assets/lips.png';
import nail_polish from './assets/nail-polish.png';
import single_pot from './assets/single-pot.png';
import eyeshadow from './assets/eyeshadow.png';

export default function Grid() {
  const { t } = useTranslation();

  return (
    <GridWrapper>
      <Photo>
        <img src={brushes} alt={t('homePage.brushes')} />
      </Photo>
      <PhotoLips>
        <img src={lips} alt={t('homePage.lips')} />
      </PhotoLips>
      <Photo>
        <img src={nail_polish} alt={t('homePage.nailPolish')} />
      </Photo>
      <Photo>
        <img src={single_pot} alt={t('homePage.singlePot')} />
      </Photo>
      <Photo>
        <img src={eyeshadow} alt={t('homePage.eyeshadow')} />
      </Photo>
    </GridWrapper>
  );
}
