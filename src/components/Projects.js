import React from 'react';
import {
  StyledProjects,
  Container,
  CardsWrapper,
  Card,
  Heading,
  Desc,
  Technologies,
  Links,
  Image,
} from './styles/Projects.styled';

import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data';

const Projects = () => {
  return (
    <StyledProjects id="projects">
      <Container>
        <Heading>Projects</Heading>
        <CardsWrapper>
          {projects.map((project) => {
            const {
              id,
              subtitle,
              title,
              description,
              technologies,
              links,
              image,
            } = project;
            return (
              <Card key={id}>
                <Desc className="desc">
                  <h3>{subtitle}</h3>
                  <h4>{title}</h4>
                  <p>{description}</p>
                  <Technologies>
                    {technologies.map((item, i) => {
                      return <li key={i}>{item}</li>;
                    })}
                  </Technologies>
                  <Links>
                    <a
                      href={links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiExternalLink />
                      Live
                    </a>
                    <a
                      href={links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FiGithub />
                      Github
                    </a>
                  </Links>
                </Desc>
                <Image className="img">
                  <img src={image} alt={title} />
                </Image>
              </Card>
            );
          })}
        </CardsWrapper>
      </Container>
    </StyledProjects>
  );
};

export default Projects;
