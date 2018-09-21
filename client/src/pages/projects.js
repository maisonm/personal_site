import React, { Component } from 'react';
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
    position: relative;

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

const Details = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
    justify-content: first baseline;
    align-items: center;

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

const ProjectDetails = styled.div`
    height: 35%;
    width: 100%;
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
            <Details>
              <h5> r/Tronix | Reddit CSS redesign  </h5>
              <p>
                 Collaborated with other Reddit members to help write the custom CSS to redesign r/Tronix's CSS layout.
                 The goal was to create a minimilistic black/white/grey themed layout.
                 Nothing too fancy here, just pure CSS and a fun project to collaborate on!
                 Tronix (TRX) is a cryptocurrency, and it's official subreddit has over 67k subscribers currently.
              </p>
              <a href="https://www.reddit.com/r/tronix" target="_blank" rel="noopener noreferrer"> | /Tronix | </a>
            </Details>
          </ProjectDetails>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage />
          <ProjectDetails>
            <Details>
              <h5> React Weather App Tutorial </h5>
              <p>
                    This small weather app was built with the intention of being an example for a tutorial I wrote
                    on Medium. It was less about the weather and more about connecting a backend Node Express server with a frontend client like React, and sending information back and forth between them. It utalizes a 3rd-party weather api via Open Weather Map to make weather reuests in the backend. The frontend captures a zipcode and then POST's it to the backend that then is used with the weather API qOnce the data is returned, it's fetched by the React component responsible for rendering weather display.
              </p>
              <a href="https://www.github.com"> | Github Repo | </a>
            </Details>
          </ProjectDetails>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage />
          <ProjectDetails>
            <Details>
              <h5> Portfolio Site </h5>
              <p>
                 This project was built with React, Gatsby, GraphQL, NodeJs and my fingers.
                 Styled-components are used throughout the site.
              </p>
              <a href="https://www.github.com"> | Github Repo | </a>
            </Details>
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
