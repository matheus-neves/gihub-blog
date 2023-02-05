import styled from 'styled-components';

export const InputSearch = styled.input`
  width: 100%;
  height: 5rem;
  padding: 1.2rem 1.6rem;
  background-color: ${({ theme }) => theme.pallete['base-input']};
  outline: 1px solid ${({ theme }) => theme.pallete['base-border']};
  border: 0;
  border-radius: 6px;

  color: ${({ theme }) => theme.pallete['base-text']};
  font-size: 1.6rem;

  &::placeholder {
    color: ${({ theme }) => theme.pallete['base-label']};
  }

  &:focus {
    outline-color: ${({ theme }) => theme.pallete.blue};
  }
`;

export const PostsContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  margin-top: 7.2rem;
`;

export const PostsHeader = styled.header`
  & > div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.2rem;
  }

  h2 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.pallete['base-subtitle']};
  }

  span {
    color: ${({ theme }) => theme.pallete['base-span']};
    font-size: 1.4rem;
  }
`;

export const PostsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.4rem;

  @media (min-width: ${({ theme }) => `${theme.breakpoints.sm}px`}) {
    grid-template-columns: 1fr 1fr;
    gap: 3.2rem;
  }
`;
