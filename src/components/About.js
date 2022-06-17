import React from 'react';
import {
  Container,
  Heading,
  StyledAbout,
  Text,
  Skills,
} from './styles/About.styled';

import { skills } from '../data';

const About = () => {
  return (
    <StyledAbout id="about">
      <Container>
        <Heading>About Me</Heading>
        <Text>
          <p>
            Hello! My name is <span>Lian Paul</span> and I’m a web developer
            with a passion for <span>front end development</span>. I’m currently
            a fourth year student at Access Computer College pursuing a
            bachelor’s degree in information and technology. I aspire toward a
            career that will allow me to channel my creativity through crafting
            beautiful software and engaging experiences.
          </p>
          <p>
            I have a passion for coding and challenging myself creatively. I
            enjoy learning new skills daily, and staying connected, and involved
            with my fellow developers.
          </p>
        </Text>

        <Skills>
          <h4>Top Expertise</h4>
          <section>
            <div>
              <p>Programming Languages</p>
              <ul>
                {skills.language.map((item, i) => {
                  return (
                    <li key={i}>
                      {skills.icon}
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p>Libraries</p>
              <ul>
                {skills.libraries.map((item, i) => {
                  return (
                    <li key={i}>
                      {skills.icon}
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <p>Tools</p>
              <ul>
                {skills.tools.map((item, i) => {
                  return (
                    <li key={i}>
                      {skills.icon}
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          {/* <section>
            <div>
              <p className="experience-with">
                Here are a few technologies I’ve been experience working with
              </p>
              <ul>
                {skills.experience.map((item, i) => {
                  return (
                    <li key={i}>
                      {skills.icon}
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </section> */}
        </Skills>
      </Container>
    </StyledAbout>
  );
};

export default About;
