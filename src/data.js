import { FaRegEnvelope, FaGithub } from 'react-icons/fa';

export const navLinks = [
  {
    id: 1,
    url: 'home',
    text: 'home',
  },
  {
    id: 2,
    url: 'works',
    text: 'works',
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
