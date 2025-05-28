import {
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub, 
} from 'react-icons/fa';
import {
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiSwagger,
  SiTailwindcss,
  SiRedux,
} from 'react-icons/si';

export const skills = [
  { name: 'HTML5', icon: FaHtml5, size: 'text-5xl text-orange-600' },
  { name: 'JavaScript', icon: FaJs, size: 'text-4xl text-yellow-500' },
  { name: 'ReactJS', icon: FaReact, size: 'text-5xl text-cyan-400' },
  { name: 'TypeScript', icon: SiTypescript, size: 'text-4xl text-blue-500' },
  { name: 'NodeJS', icon: FaNodeJs, size: 'text-5xl text-green-600' },
  { name: 'Express', icon: SiExpress, size: 'text-5xl text-gray-700' },
  { name: 'MongoDB', icon: SiMongodb, size: 'text-5xl text-green-500' },
  { name: 'Swagger', icon: SiSwagger, size: 'text-5xl text-green-700' },
  { name: 'TailwindCSS', icon: SiTailwindcss, size: 'text-5xl text-sky-400' },
  { name: 'Redux Toolkit', icon: SiRedux, size: 'text-5xl text-purple-600' },
  { name: 'GitHub', icon: FaGithub, size: 'text-5xl text-black' },
];
