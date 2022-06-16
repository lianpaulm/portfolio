import styled from 'styled-components';

export const StyledProjects = styled.section`
  background: #f4f4f4;
`;

export const Container = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  padding: 4rem 1.8rem;
`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  font-family: ${({ theme }) => theme.fonts.heading};
  margin-bottom: 2rem;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  @media screen and (max-width: 768px) {
    gap: 4rem;
  }
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;

  @media screen and (max-width: 980px) {
    grid-template-columns: 45% auto;
    gap: 1rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;

    .desc {
      z-index: 10;
      padding: 2rem;
      color: #fff;

      h3,
      a {
        color: #d6c2ff;
      }
    }

    .img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;

      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(39, 39, 39, 0.95);
        border-radius: 4px;
      }

      img {
        border-radius: 4px;
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
  }
`;

export const Desc = styled.div`
  h3 {
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.primary};
    text-transform: uppercase;
  }

  h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 2rem;
    font-weight: 900;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1.2rem;
  }

  @media screen and (min-width: 768px) and (max-width: 920px) {
    margin-right: -6rem;
    position: relative;
    z-index: 1;

    p {
      background: #fff;
      padding: 1rem;
      border-radius: 4px;
    }
  }
`;

export const Technologies = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1.5rem;

  li {
    font-size: 0.8rem;
    border: 1px solid currentColor;
    padding: 0 0.6em;
    border-radius: 1rem;
  }
`;

export const Links = styled.div`
  display: flex;
  gap: 1rem;

  a {
    display: flex;
    align-items: center;
    gap: 0.2em;
    border: 1px solid currentColor;
    padding: 0.2em 1em;
    border-radius: 4px;
    transition: ${({ theme }) => theme.transition};
    color: ${({ theme }) => theme.colors.primary};

    &:hover {
      color: #fff;
      background: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const Image = styled.div`
  cursor: pointer;

  @media screen and (min-width: 980px) {
    img {
      margin-left: auto;
      max-width: 36.1875rem;
    }
  }
`;
