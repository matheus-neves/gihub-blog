import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3.2rem;
  border-radius: 10px;
  background: ${({ theme }) => theme.pallete['base-post']};
  border: 2px solid transparent;
  cursor: pointer;

  header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 1rem;

    h3 {
      flex: 1;
      max-width: 25rem;
    }

    time {
      font-size: 1.4rem;
      color: ${({ theme }) => theme.pallete['base-span']};
    }
  }

  transition: border 0.1s;

  &:hover {
    border: 2px solid ${({ theme }) => theme.pallete['base-label']};
  }
`;
