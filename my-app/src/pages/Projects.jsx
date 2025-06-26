import React from 'react';
import SpotlightCard from '../components/SpotlightCard';
import sample1 from '../assets/quickfoods.png';
import sample2 from '../assets/onyx.png';
import sample3 from '../assets/Tech Up!.png';
import sample4 from '../assets/sigdev.png';
import sample5 from '../assets/tictactoe.png'


const projects = [
  {
    title: 'QuickFoods Recipes',
    description: 'Revolves around simplifying the culinary experience for everyone.',
    image: sample1,
    link: 'https://capstone-final-project-8ka2.vercel.app/',
  },
  {
    title: 'Onyx Health & Wellness',
    description: 'Redesign for a local brand using Squarespace. Onyx is a health and wellness business specializing in PEMF therapy.',
    image: sample2,
    link: 'https://www.onyxhealthandwellness.ca/',
  },
  {
    title: 'Tech Up',
    description: 'App that allows New Grads & Students to connect with Startup companies',
    image: sample3,
    link: 'https://www.figma.com/proto/rko19oqeztlRtYftw6W6hA/TechUp?node-id=13-1053&t=czpauY0SLfxQskIv-1&scaling=scale-down&content-scaling=fixed&page-id=5%3A693&starting-point-node-id=5%3A806&show-proto-sidebar=1',
  },
  {
    title: 'Signature Developments',
    description: 'Calgary Based Commercial construction company',
    image: sample4,
    link: 'https://gabannfranco.wixstudio.com/mysite',
  },
  {
    title: 'Tic-Tac-Toe',
    description: 'Get three X\'s or O\'s in a row horizontally, vertically, or diagonally to win.',
    image: sample5,
    link: 'https://gabannfranco.wixstudio.com/mysite',
  },
];

const PortfolioPage = () => {
  return (
    <main className="portfolio-main"> {/* Apply custom class */}
      <h1 className="portfolio-title">My Portfolio</h1> {/* Apply custom class */}
      <div className="projects-grid"> {/* Apply custom class */}
        {projects.map((project, index) => (
          <SpotlightCard key={index}>
            <div className="p-4 flex flex-col items-center text-center">
              <img
                src={project.image}
                alt={project.title}
                className="project-image" // <--- Apply the CSS class here
              />
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="text-sm mt-2 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-project-button" // <--- Apply the CSS class here
              >
                View Project
              </a>
            </div>
          </SpotlightCard>
        ))}
      </div>
    </main>
  );
};

export default PortfolioPage;