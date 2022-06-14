import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 1em 1.8em;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.secondary};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

export default StyledButton;
