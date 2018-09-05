import React from 'react';
import styled, { keyframes } from 'styled-components';
import {
  AboutContainer, HeaderCard, MaisonContainer, ContactDetails,
  TheDeets, AboutMeText, AboutMaisonSection,
  MaisonTechnicalSection, OneDayBlock, TechnicalContainer,
  TechnicalSection, TechnicalSkillLabel, TechnicalSkillBlock,
} from './styles/about/styles';

// Assets
import Email from './assets/about/email.svg';
import LinkIcon from './assets/about/link.svg';
import LocationDrop from './assets/about/location.svg';
import Laptop from './assets/about/laptop.svg';
import CssIcon from './assets/about/css3.svg';
import Git from './assets/about/git.svg';
import HtmlIcon from './assets/about/html5.svg';
import Js from './assets/about/js.svg';
import Mongo from './assets/about/mongo.svg';
import NodeIcon from './assets/about/node.svg';
import ReactIcon from './assets/about/react.svg';
import Sass from './assets/about/sass.svg';
import ReduxIcon from './assets/about/redux.svg';
// import { } from 'react-animations';

const TechIcons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  & > img {
    margin-left: 15px;
  }
`;

const AboutPage = () => (
  <AboutContainer>
    <MaisonContainer>
      <AboutMaisonSection>
        <ContactDetails>
          <HeaderCard><p>Maison Moa</p></HeaderCard>
          <TheDeets>
            <p>
              <img src={LocationDrop} alt="location drop" />
            Central Florida
            </p>
            <p>
              <img src={Email} alt="email icon" />
            maison.moa@gmail.com
            </p>
            <a href="https://github.com/maisonm" target="_blank" rel="noopener norefferer">
              <img src={LinkIcon} alt="link icon" />
            Github.com/maisonm
            </a>
            <a href="https://linkedin.com/in/maisonmoa" target="_blank" rel="noopener norefferer">
              <img src={LinkIcon} alt="link icon" />
           Linkedin.com/in/maisonmoa
            </a>
          </TheDeets>
        </ContactDetails>
        <AboutMeText>
          <p>
            The scope of my work deals largely with the frontend: React,
            responsive development, SASS/CSS3, Flexbox, Bootstrap, Javascript (ES6), HTML5,
            and all other facets of front-end development like SEO, user experience,
            customer relations, etc.
          </p>
          <p>
            Aside from frontend work, I spend time working to develop my technical skills further.
            I typically like to work on projects utalizing the MERN stack. My goal is to become a fullstack
            developer at some point in my career! I really
            enjoy solving complex problems, and there is certainly no shortage
            of those in web developement. I consider myself a quick learner, and take pride
            in pushing myself to learn new things.
            Outside of web dev, I play and practice quite
            a bit of golf.
            <span> (If you want to play golf, my answer is not no.) </span>
          </p>
          <p>
            I am available for contact anytime via email. You can view my email, Github,
            or Linkedin via the social links above &amp; below. Thanks for looking.
          </p>
        </AboutMeText>
      </AboutMaisonSection>
      <MaisonTechnicalSection>
        <OneDayBlock>
          <p>One</p>
          <p>day</p>
          <p>or</p>
          <p>day</p>
          <p>one</p>
        </OneDayBlock>
        <TechnicalSection>
          <TechnicalContainer>
            <HeaderCard><p>Techincal</p></HeaderCard>
            <TheDeets>
              <p>
                <img src={Laptop} alt="laptop icon" />
                MacOS/Windows
              </p>
              <TechIcons>
                <img src={Js} alt="javascript logo" />
                <img src={HtmlIcon} alt="html5 logo" />
                <img src={CssIcon} alt="test" />
                <img src={Sass} alt="sass logo" />
                <img src={ReactIcon} alt="react js logo" />
                <img src={ReduxIcon} alt="redux logo" />
                <img src={NodeIcon} alt="node logo" />
                <img src={Mongo} alt="mongodb logo" />
                <img src={Git} alt="git logo" />
              </TechIcons>
            </TheDeets>
          </TechnicalContainer>
          <AboutMeText>
            <TechnicalSkillBlock>
              <TechnicalSkillLabel> Frontend / </TechnicalSkillLabel>
              <p>
                ReactJs, Redux, Javascrtipt (ES6), JQuery, consuming API’s, HTML5, CSS3, SASS,
                Flexbox, CSS Grid, Bootstrap, Bulma, Wordpress, Gatsby, Responsive Development, W3C
                Accessibility, Developer Tools
              </p>
            </TechnicalSkillBlock>
            <TechnicalSkillBlock>
              <TechnicalSkillLabel> Backend / </TechnicalSkillLabel>
              <p>
                NodeJs, Express, MongoDB, Mongoose, JSON Web Tokens(JWT), npm, Yarn, REST-
                ful API’s, Webpack
              </p>
            </TechnicalSkillBlock>
            <TechnicalSkillBlock>
              <TechnicalSkillLabel> Version Cntrl / </TechnicalSkillLabel>
              <p>
                Git (terminal or desktop), Github
              </p>
            </TechnicalSkillBlock>
            <TechnicalSkillBlock>
              <TechnicalSkillLabel> Design / </TechnicalSkillLabel>
              <p>
                Adobe Creative Suite, Sketch, Figma
              </p>
            </TechnicalSkillBlock>
          </AboutMeText>
        </TechnicalSection>
      </MaisonTechnicalSection>
    </MaisonContainer>
  </AboutContainer>
);

export default AboutPage;
