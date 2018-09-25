import React from 'react';

// Styles
import { ProjectsOverviewContainer, OverviewHeading, OverviewText } from '../../pages/styles/projects/styles';

const ProjectsOverview = () => (
  <ProjectsOverviewContainer>
    <OverviewHeading>Projects</OverviewHeading>
    <OverviewText>
          The project&apos;s code can be
          found via the Github link
          on the cards. Some projects
          are hosted and live, and others
          are living quietly in their repo.
    </OverviewText>
    <OverviewText>
          If there is a project you’d like to
          see live, please contact me and I will get that going for you.
          Thanks for looking
    </OverviewText>
  </ProjectsOverviewContainer>
);

export default ProjectsOverview;
