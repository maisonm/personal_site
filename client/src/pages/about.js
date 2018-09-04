import React from 'react';
// import styled, { keyframes } from 'styled-components';
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
// import { } from 'react-animations';

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
            Aside from frontend work, I use my time to work to develop my skills further.
            I typically work on projects utalizing the MERN stack. I really
            enjoy solving complex problems, and there is certainly no shortage
            of those in web developement. Outside of web dev, I play and practice quite
            a bit of golf.
            <span> (If you want to play golf, my answer is not no.) </span>
          </p>
          <p>
            I am available for contact anytime via email. You can view my email, github,
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
                MacOS / Windows
              </p>
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
