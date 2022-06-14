import React from 'react';
import { HeroContainer, HeroText, StyledHero } from './styles/Hero.styled';
import StyledButton from './styles/Button.styled';
import SocialLinks from './SocialLinks';

const Hero = () => {
  return (
    <StyledHero id="home">
      <HeroContainer>
        <HeroText>
          <h1>Hi! I am Lian Paul</h1>
          <h2>Front end developer</h2>
          <StyledButton>Download Resume</StyledButton>
          <SocialLinks />
        </HeroText>
      </HeroContainer>
    </StyledHero>
  );
};

export default Hero;
