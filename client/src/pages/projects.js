import React from 'react';

import {
  ProjectsPageContainer, ProjectsOverviewContainer, OverviewHeading,
  OverviewText, ProjectCardsContainer, ProjectCardBox, ProjectCard,
  ProjectImage, ProjectDetails, Details,
} from './styles/projects/styles';

// Assets
import TronixImg from './assets/projects/project_image/tronix.gif';
import WeatherImg from './assets/projects/project_image/weather_app.gif';
import GolfCalcImg from './assets/projects/project_image/handicap_calc.gif';
import PersonalSiteImg from './assets/projects/project_image/personal_site.gif';


const Projects = () => (
  <ProjectsPageContainer>
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
    <ProjectCardsContainer>
      <ProjectCardBox>
        <ProjectCard>
          <ProjectImage>
            <img src={TronixImg} alt="tronix project gif" />
          </ProjectImage>
          <ProjectDetails>
            <Details>
              <h5> r/Tronix | Reddit CSS redesign  </h5>
              <p>
                 Collaborated with other Reddit members to help write the custom CSS to
                 redesign r/Tronix&apos;s CSS layout.
                 The goal was to create a minimilistic black/white/grey themed layout.
                 Nothing too fancy here, just pure CSS and a fun project to collaborate on!
                 Tronix (TRX) is a cryptocurrency, and it&apos;s official subreddit has
                 over 67k subscribers currently.
              </p>
              <a href="https://www.reddit.com/r/tronix" target="_blank" rel="noopener noreferrer"> | /Tronix | </a>
            </Details>
          </ProjectDetails>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage>
            <img src={PersonalSiteImg} alt="personal site gif" />
          </ProjectImage>
          <ProjectDetails>
            <Details>
              <h5> Personal Website </h5>
              <p>
                 This website is built with React, Gatsby, &amp; GraphQL, all hosted via Heroku.
                 Blog posts are generated from markdown files that support code block highlighting
                 via PrismJS and inserting images. The CSS was written with styled-components.
                 This site periodically undergoes changes and updates as I learn more.
              </p>
              <a href="https://www.github.com"> | Github Repo | </a>
            </Details>
          </ProjectDetails>
        </ProjectCard>
        <ProjectCard>
          <ProjectImage>
            <img src={WeatherImg} alt="weather app project gif" />
          </ProjectImage>
          <ProjectDetails>
            <Details>
              <h5> React Weather App Tutorial </h5>
              <p>
                    This small weather app was built with the intention of being an example for a tutorial I wrote
                    on Medium. It was less about the weather and more about connecting a
                    backend Node Express server with a frontend client like React, and
                    sending information back and forth between them.
                    It utalizes a 3rd-party weather api via Open Weather
                    Map to make weather reuests in the backend.
                    The frontend captures a zipcode and then POST&apos;s it to the backend
                    that then is used with the weather
                    API qOnce the data is returned, it&apos;s fetched by the React component
                    responsible for rendering weather display.
              </p>
              <a href="https://github.com/maisonm/weather_app_tutorial" target="_blank" rel="noopener noreferrer"> | Github Repo | </a>
              <a href="https://medium.com/@maison.moa/create-a-simple-weather-app-using-node-js-express-and-react-54105094647a" target="_blank" rel="noopener noreferrer"> | Medium Article | </a>
            </Details>
          </ProjectDetails>

        </ProjectCard>
        <ProjectCard>
          <ProjectImage>
            <img src={GolfCalcImg} alt="golf handicap calculator project gif" />
          </ProjectImage>
          <ProjectDetails>
            <Details>
              <h5> Golf Handicap Calculator </h5>
              <p>
                 This handicap calculator was a tool I made with vanilla Javascript to help me
                 quickly gauge where my handicap was after each round of golf.
                 There are way better calcultors out there, but I needed something simple and
                 to the point.
                 Just the basics here; vanilla Javascript, a bit of math, HTML5, and CSS3.
                 I personally use this quite often.
              </p>
              <a href="https://www.github.com"> | Github Repo | </a>
            </Details>
          </ProjectDetails>
        </ProjectCard>
      </ProjectCardBox>
    </ProjectCardsContainer>
  </ProjectsPageContainer>
);

export default Projects;
