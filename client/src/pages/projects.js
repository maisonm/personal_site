import React from 'react';

// Styles
import {
  ProjectsPageContainer, ProjectCardsContainer,
} from '../styles/projects/styles';

// Components
import ProjectCards from '../components/projects/ProjectCards';
import ProjectsOverview from '../components/projects/ProjectsOverview';

const Projects = () => (
  <ProjectsPageContainer>
    <ProjectsOverview />
    <ProjectCardsContainer>
      <ProjectCards />
    </ProjectCardsContainer>
  </ProjectsPageContainer>
);

export default Projects;
