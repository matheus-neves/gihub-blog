import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: calc(864px + 2rem);
  height: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    max-width: calc(864px + 4rem);
    padding: 0 2rem;
  }
`;
