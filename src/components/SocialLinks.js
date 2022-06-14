import React from 'react';
import { socialLinks } from '../data';
import styled from 'styled-components';

const StyledSocialLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  a {
    font-size: 2rem;
    padding: 0.2rem;
    display: inline-block;
  }
`;

const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      {socialLinks.map((link) => {
        const { id, url, icon } = link;
        return (
          <li key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {icon}
            </a>
          </li>
        );
      })}
    </StyledSocialLinks>
  );
};

export default SocialLinks;
