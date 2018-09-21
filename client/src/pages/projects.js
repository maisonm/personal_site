import React from 'react';
import styled, { keyframes } from 'styled-components';

const ProjectsPageContainer = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -10px;
    z-index: -99;
`;

const ProjectsOverviewContainer = styled.div`
    height: 550px;
    flex-basis: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const OverviewHeading = styled.h1`
    width: 70%;
    font-size: 2.2em;
`;

const OverviewText = styled.p`
    width: 70%;
    font-size: .82em;
    font-weight: 400;
`;

const ProjectCardsContainer = styled.div`
    height: 550px;
    flex-basis: 60%;
    display: flex;
    justify-content: center;
    align-items: center;

`;

const ProjectCardBox = styled.div`
    display: flex;
    height: 100%;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    overflow: auto;
    border-radius: 2px;
`;

const ProjectCard = styled.div`
    width: 350px;
    height: 370px;
    margin: 10px;
    box-shadow: 0px 0px 4px #c0c0c0;
    transition: all cubic-bezier(0.075, 0.82, 0.165, 1) .5s;
    display: flex;
    flex-direction: column;

    &:hover {
        transform: translateY(4px);
        transition: all cubic-bezier(0.075, 0.82, 0.165, 1) .5s;
        box-shadow: 0px 0px 4px #64ABF6;
    }
`;

const ProjectImage = styled.div`
    border: solid orange;
    flex-basis: 65%;
`;

const ProjectDetails = styled.div`
    flex-basis: 35%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: auto;

    & > h5 {
        margin-bottom: -2px;
        width: 90%;
        text-align: center;
    }

    & > p {
        font-size: .7em;
        text-align: center;
        width: 90%;
    }

    & > a {
        font-size: .5em;
        text-decoration: none;
        color: #3A6EA5;
        font-weight: 500;
        transition: .3s;
        letter-spacing: .2px;
        margin-bottom: 8px;

        &:hover {
            transition: .3s;
            color: #020202;
            cursor: pointer;
            letter-spacing: .3px;
        }
    }
`;


const Projects = () => (
  <ProjectsPageContainer>
    <ProjectsOverviewContainer>
      <OverviewHeading>Projects</OverviewHeading>
      <OverviewText>
        The project's code can be
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
    <ProjectCardsContainer>
      <ProjectCardBox>
        <ProjectCard>
          <ProjectImage />
          <ProjectDetails>
            <h5> Portfolio Site </h5>
            <p>
               This project was built with React, Gatsby, GraphQL, NodeJs and my fingers.
               Styled-components are used throughout the site.
            </p>
            <a href="https://www.github.com"> | Github Repo | </a>
          </ProjectDetails>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage />
          <ProjectDetails>
            <h5> Portfolio Site </h5>
            <p>
               This project was built with React, Gatsby, GraphQL, NodeJs and my fingers.
               Styled-components are used throughout the site.
            </p>
            <a href="https://www.github.com"> | Github Repo | </a>
          </ProjectDetails>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage />
          <ProjectDetails>
            <h5> Portfolio Site </h5>
            <p>
               This project was built with React, Gatsby, GraphQL, NodeJs and my fingers.
               Styled-components are used throughout the site.
            </p>
            <a href="https://www.github.com"> | Github Repo | </a>
          </ProjectDetails>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage />
          <ProjectDetails>
            <h5> Portfolio Site </h5>
            <p>
               This project was built with React, Gatsby, GraphQL, NodeJs and my fingers.
               Styled-components are used throughout the site.
            </p>
            <a href="https://www.github.com"> | Github Repo | </a>
          </ProjectDetails>
        </ProjectCard>
      </ProjectCardBox>
    </ProjectCardsContainer>
  </ProjectsPageContainer>
);

export default Projects;
