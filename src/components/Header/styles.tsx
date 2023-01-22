import background from '@assets/cover.jpg';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: url(${background}) no-repeat 100% 100%;
  width: 100%;
  height: 15rem;
  background-size: 100% 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 6rem;
    margin-top: -3rem;
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    height: 29.6rem;

    img {
      height: 9.8rem;
      margin-top: -5rem;
    }
  }
`;
