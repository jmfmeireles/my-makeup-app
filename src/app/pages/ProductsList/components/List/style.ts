import styled from 'styled-components/macro';
import { Slider, DialogContent as MUIDialogContent } from '@mui/material';

export const ProductsSection = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ProductWrapper = styled.div`
  transition: 0.5s ease;
  width: 25%;
  margin-bottom: 30px;
  background-color: ${props => props.theme.backgroundVariant};
  @media (max-width: 1000px) {
    width: 33%;
  }
  @media (max-width: 750px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
  a {
    text-decoration: none;
    color: #333;
    word-break: break-all;
    background-color: transparent;
  }
  :hover {
    box-shadow: 0px 0px 20px #b4b4b4;
    transform: scale(1.02);
  }
`;

export const Panel = styled.div`
  padding: 20px;
  text-align: center;
`;

export const ProductImage = styled.div`
  width: 60%;
  margin: 5px auto;
  cursor: pointer;
  img {
    width: 100%;
    display: block;
    border-style: none;
  }
`;

export const RatingWrapper = styled.div`
  margin: 10px 0px;
`;

export const Name = styled.h3`
  margin-top: 20px;
  line-height: 15px;
`;

export const Price = styled.p`
  line-height: 5px;
`;

export const ColorSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 5px 0px;
`;

export const Color = styled.div<{ color: string }>`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

export const Rating = styled(Slider)`
  color: #ffd700 !important;
  height: 8px;
  .MuiSlider-track {
    border: none;
  }
  .MuiSlider-thumb {
    height: 10px;
    width: 10px;
    border: 2px solid #ffd700 !important;
    &:focus,
    &:hover,
    &.Mui-active,
    &.Mui-focusVisible {
      box-shadow: none;
    }
    &:before {
      display: none;
    }
  }
  .MuiSlider-valueLabel {
    line-height: 1.2;
    font-size: 12px;
    background: unset;
    padding: 0;
    width: 32px;
    height: 32px;
    background-color: #ffd700 !important;
  }
`;

export const DialogTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px;
  .MuiDialogTitle-root {
    word-break: break-all;
    width: 80%;
    @media (max-width: 1000px) {
      font-size: 2rem !important;
    }
    @media (max-width: 750px) {
      font-size: 1.5rem !important;
    }
    @media (max-width: 500px) {
      font-size: 1rem !important;
    }
  }
`;

export const DialogContent = styled(MUIDialogContent)`
  overflow: hidden !important;
  img {
    width: 90%;
    display: block;
    margin: auto;
  }
`;
