import styled from 'styled-components/macro';
import { Autocomplete as MUIAutocomplete } from '@mui/material';

export const Wrapper = styled.div`
  padding: 15px 5px;
  display: flex;
  align-items: center;
  justify-content: start;
`;

export const Autocomplete = styled(MUIAutocomplete)`
  width: 50%;
  @media (max-width: 1000px) {
    width: 100%;
  }
  .MuiOutlinedInput-root,
  .MuiOutlinedInput-root:hover,
  .MuiOutlinedInput-notchedOutline {
    border: solid 1px ${props => props.theme.primary} !important;
  }
  .MuiIconButton-root,
  .Mui-focused {
    color: ${props => props.theme.primary} !important;
  }
` as typeof MUIAutocomplete;
