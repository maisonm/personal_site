import React from 'react';

// Styles
import { ProjectsOverviewContainer, OverviewHeading, OverviewText } from '../../styles/projects/styles';

const ProjectsOverview = () => (
  <ProjectsOverviewContainer>
    <OverviewHeading>Projects</OverviewHeading>
    <OverviewText>
          The project&apos;s code can be
          found via the links
          on the cards. Some projects
          are hosted, and others
          are living quietly in their repo. Client
          projects are not shown.
    </OverviewText>
    <OverviewText>
          If there is a project you’d like to
          see live, please contact me and I will get that going for you.
          Thanks for looking
    </OverviewText>
  </ProjectsOverviewContainer>
);

export default ProjectsOverview;
