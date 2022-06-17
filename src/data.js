import { FaRegEnvelope, FaGithub } from 'react-icons/fa';
import { MdArrowRight } from 'react-icons/md';

export const navLinks = [
  {
    id: 1,
    url: 'home',
    text: 'home',
  },
  {
    id: 2,
    url: 'projects',
    text: 'projects',
  },
  {
    id: 3,
    url: 'about',
    text: 'about',
  },
  {
    id: 4,
    url: 'contact',
    text: 'contact',
  },
];

export const socialLinks = [
  {
    id: 1,
    url: 'https://github.com/lianpaulm',
    text: 'github',
    icon: <FaGithub />,
  },
  {
    id: 2,
    url: 'mailto: lianpaulmolo08@gmail.com',
    text: 'email',
    icon: <FaRegEnvelope />,
  },
];

export const projects = [
  {
    id: 1,
    subtitle: 'Bakery Website',
    title: 'BakedbyLey',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    links: {
      live: '/',
      github: 'https://github.com/lianpaulm/bakedbyley-capstone-project',
    },
    image: '/images/thumbnail.png',
  },
  {
    id: 2,
    subtitle: 'Bakery Website',
    title: 'BakedbyLey',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    links: {
      live: '/',
      github: 'https://github.com/lianpaulm/bakedbyley-capstone-project',
    },
    image: '/images/thumbnail.png',
  },
  {
    id: 3,
    subtitle: 'Bakery Website',
    title: 'BakedbyLey',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    technologies: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB'],
    links: {
      live: '/',
      github: 'https://github.com/lianpaulm/bakedbyley-capstone-project',
    },
    image: '/images/thumbnail.png',
  },
];

export const skills = {
  language: ['Javascript (ES6+)', 'HTML', 'CSS/SASS'],
  libraries: ['React', 'Styled Components'],
  tools: ['Git & Github', 'Figma'],
  experience: ['Redux', 'Node.js', 'Express', 'MongoDB'],
  icon: <MdArrowRight />,
};
