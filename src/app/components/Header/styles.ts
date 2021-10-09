import styled from 'styled-components/macro';

import { StyleConstants } from 'styles/StyleConstants';

export const Wrapper = styled.header`
  box-shadow: 0 1px 0 0 ${p => p.theme.borderLight};
  height: ${StyleConstants.NAV_BAR_HEIGHT};
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px;
  background-color: ${p => p.theme.header};
  justify-content: space-between;
  z-index: 2;
  @supports (backdrop-filter: blur(10px)) {
    backdrop-filter: blur(10px);
    background-color: ${p =>
      p.theme.header.replace(
        /rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,
        'rgba$1,0.75)',
      )};
  }
`;

export const AppNameAndDescriptionWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 1.25rem;
  color: ${p => p.theme.text};
  font-weight: bold;
  margin-right: 0.5rem;
`;

export const Description = styled.div`
  font-size: 0.75rem;
  color: ${p => p.theme.textSecondary};
  font-weight: normal;
`;

export const OptionsWrapper = styled.nav`
  display: flex;
  margin-right: -1rem;
`;

export const OptionItem = styled.a`
  color: ${p => p.theme.primary};
  cursor: pointer;
  text-decoration: none;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 0.875rem;
  font-weight: 500;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }

  .icon {
    margin-right: 0.25rem;
  }
`;
