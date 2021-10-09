import * as React from 'react';

import { ReactComponent as DocumentationIcon } from './assets/documentation-icon.svg';
import { OptionItem, OptionsWrapper } from './styles';

export default function Options() {
  return (
    <OptionsWrapper>
      <OptionItem
        href="https://makeup-api.herokuapp.com/"
        target="_blank"
        title="Documentation Page"
        rel="noopener noreferrer"
      >
        <DocumentationIcon />
        API
      </OptionItem>
    </OptionsWrapper>
  );
}
