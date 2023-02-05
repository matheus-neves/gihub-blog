import styled from 'styled-components';

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;

  background: ${({ theme }) => theme.pallete['base-profile']};
  padding: 2rem;
  margin-top: -3rem;

  border-radius: 10px;

  & > img {
    border-radius: 8px;
    width: 14.8rem;
    height: 14.8rem;
    margin-right: 3.2rem;
  }

  & > a {
    position: absolute;
    top: 2rem;
    right: 2rem;
    text-decoration: none;
    color: ${({ theme }) => theme.pallete.blue};
    padding-bottom: 2px;

    span {
      text-transform: uppercase;
      margin-right: 4px;
      font-size: 1.2rem;
      font-weight: 700;
    }

    svg {
      width: 1.2rem;
      height: 1.2rem;
    }

    transition: border-bottom 0.1s;

    &:hover {
      border-bottom: 1px solid ${({ theme }) => theme.pallete.blue};
    }
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    flex-direction: row;
    padding: 3.2rem 4rem;
    margin-top: -8rem;

    & > a {
      top: 4rem;
      right: 3.2rem;
    }
  }
`;

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.2rem;

  p {
    margin: 1.4rem 0 2.6rem;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1.2rem;
  }

  li {
    display: flex;
    align-items: center;

    span {
      color: ${({ theme }) => theme.pallete['base-subtitle']};
      margin-left: 8px;
    }
  }

  svg {
    width: 18px;
    height: 18px;
    color: ${({ theme }) => theme.pallete['base-label']};
  }

  @media (min-width: ${({ theme }) => `${theme.breakpoints.md}px`}) {
    ul {
      gap: 2.4rem;
    }
  }
`;
