import * as React from 'react';

import { Wrapper } from './styles';
import AppNameAndDescription from './AppNameAndDescription';
import Options from './Options';

export default function Header() {
  return (
    <Wrapper>
      <AppNameAndDescription />
      <Options />
    </Wrapper>
  );
}
