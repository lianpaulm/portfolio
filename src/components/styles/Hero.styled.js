import styled from 'styled-components';

export const StyledHero = styled.section`
  height: 100vh;
  background-image: linear-gradient(rgba(39, 39, 39, 1), rgba(39, 39, 39, 0.85)),
    url('/images/blue.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
`;

export const HeroContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 0 1.8rem;
`;

export const HeroText = styled.div`
  text-align: center;

  h1 {
    font-size: 4rem;
    font-weight: 900;
    line-height: 1;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  button {
    margin-bottom: 1.5rem;
  }
`;
