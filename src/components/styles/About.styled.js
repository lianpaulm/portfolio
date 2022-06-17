import styled from 'styled-components';

export const StyledAbout = styled.section`
  padding: 5rem 1.8rem;
  background: #f4f4f4;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  max-width: 1000px;
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
`;

export const Text = styled.div`
  max-width: 45rem;
  margin-bottom: 3rem;

  p:first-child {
    margin-bottom: 1rem;
  }

  span {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

export const Skills = styled.div`
  h4 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }

  section {
    display: flex;
    gap: 4rem;
    margin-bottom: 1rem;

    p {
      font-weight: 600;
      margin-bottom: 0.6rem;
    }

    li {
      display: flex;
      align-items: center;
      gap: 0.3rem;

      svg {
        color: ${({ theme }) => theme.colors.primary};
        margin-left: -0.3rem;
      }
    }
  }
`;
