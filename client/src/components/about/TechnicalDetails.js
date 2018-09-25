import React from 'react';

// Assets
import Laptop from '../assets/about/laptop.svg';
import CssIcon from '../assets/about/css3.svg';
import Git from '../assets/about/git.svg';
import HtmlIcon from '../assets/about/html5.svg';
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
} from '../../pages/styles/about/styles';

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
