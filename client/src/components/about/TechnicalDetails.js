import React from 'react';

// Assets
import Laptop from '../assets/about/laptop.svg';
import Css from '../assets/about/css3.svg';
import Git from '../assets/about/git.svg';
import Html from '../assets/about/html5.svg';
import Js from '../assets/about/js.svg';
import Mongo from '../assets/about/mongo.svg';
import NodeIcon from '../assets/about/node.svg';
import ReactIcon from '../assets/about/react.svg';
import Sass from '../assets/about/sass.svg';
import ReduxIcon from '../assets/about/redux.svg';

// Styles
import {
  MaisonTechnicalSection, OneDayBlock, TechnicalContainer,
  HeaderCard, TheDeets, TechnicalSection,
  TechnicalSkillLabel, TechnicalSkillBlock, TechIcons, AboutMeText,
  MobileHeaderCard,
} from '../../pages/styles/about/styles';

const iconArray = [Js, ReactIcon, Css, Sass, Html, NodeIcon, Mongo, ReduxIcon, Git];

const TechnicalDetails = () => (
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
        <MobileHeaderCard>
          <p>Techincal</p>
        </MobileHeaderCard>
        <HeaderCard><p>Techincal</p></HeaderCard>
        <TheDeets>
          <p>
            <img src={Laptop} alt="laptop icon" />
            MacOS/Windows
          </p>
          <TechIcons>
            {
              iconArray.map((name, i) => <img key={i} src={name} alt="tech icon" />)
            }
          </TechIcons>
        </TheDeets>
      </TechnicalContainer>
      <AboutMeText>
        <TechnicalSkillBlock>
          <TechnicalSkillLabel> Frontend / </TechnicalSkillLabel>
          <p>
            ReactJs, Redux, Javascrtipt (ES6), JQuery, consuming API’s, HTML5, CSS3, SASS,
            Flexbox, CSS Grid, Bootstrap, Bulma, Wordpress, Responsive Development, W3C
            Accessibility, Developer Tools
          </p>
        </TechnicalSkillBlock>
        <TechnicalSkillBlock>
          <TechnicalSkillLabel> Backend / </TechnicalSkillLabel>
          <p>
            NodeJs, Express, MongoDB, Mongoose, Gatsby, JSON Web Tokens(JWT), npm, Yarn, REST-
            ful API’s, GraphQL, Webpack
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

);

export default TechnicalDetails;
