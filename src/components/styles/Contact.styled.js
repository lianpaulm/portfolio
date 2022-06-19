import styled from 'styled-components';

export const StyledContact = styled.section`
  padding: 6rem 1.8rem;
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

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 5rem;
  }
`;

export const Col = styled.div``;

export const Form = styled.form`
  max-width: 30rem;
`;

export const FormControl = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.2rem;
    font-weight: 600;
  }

  input,
  textarea {
    padding: 0.6rem 0.8rem 0.7rem;
    max-width: 100%;
    font-size: 1rem;
  }
`;

export const Button = styled.button`
  padding: 0.8em 1.5em;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.primary};
  font-size: 1rem;
  color: #fff;
  transition: ${({ theme }) => theme.transition};

  &:hover {
    background: #6334e8;
  }
`;

export const Info = styled.ul`
  padding-top: 1.5rem;
  padding-left: 6rem;

  @media screen and (max-width: 980px) {
    padding-left: 2rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }

  li {
    display: flex;
    gap: 0.7rem;
    align-items: center;
    margin-bottom: 1.4rem;

    svg {
      font-size: 1.2rem;
      width: 2rem;
      flex-shrink: 0;
    }
    span {
      max-width: 20rem;
    }

    &:first-child {
      font-size: 1.1rem;
    }

    &:last-child {
      align-items: flex-start;

      svg {
        font-size: 1.5rem;
      }
    }
  }
`;
