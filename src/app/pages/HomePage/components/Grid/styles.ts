import styled from 'styled-components/macro';

export const GridWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  grid-gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  @media (max-width: 500px) and (min-height: 450px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
  }
`;
export const Photo = styled.div`
  transition: 0.3s;
  img {
    width: 100%;
    display: block;
    border-style: none;
  }
`;

export const PhotoLips = styled(Photo)`
  grid-area: 1 / 2 / 3 / 2;
  @media (max-width: 500px) and (min-height: 450px) {
    grid-area: 2 / 1 / 2 / 3;
    img {
      max-height: 60vh;
    }
  }
`;
