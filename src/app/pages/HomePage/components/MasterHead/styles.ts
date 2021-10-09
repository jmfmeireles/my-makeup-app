import styled from 'styled-components/macro';

import { Button } from '@mui/material';

export const MasterHeadWrapper = styled.div`
  height: auto;
  width: 100%;
  background-color: white;
  opacity: 0.8;
  padding: 10px 0;
  position: absolute;
  top: 35%;
  text-align: center;
`;

export const Title = styled.h1`
  color: ${p => p.theme.text};
  text-align: center;
  font-size: 5rem;
  padding: 5px;
  @media (max-width: 800px) {
    font-size: 3rem;
  }
`;

export const SubTitle = styled.h3`
  font-size: 1.25rem;
  margin: 0;
  text-align: center;
  color: ${p => p.theme.text};
  @media (max-width: 800px) {
    font-size: 1rem;
  }
`;

export const ShopButton = styled(Button)`
  margin-top: 1rem !important;
  color: ${props => props.theme.primary} !important;
  border: solid 1px ${props => props.theme.primary} !important;
`;
