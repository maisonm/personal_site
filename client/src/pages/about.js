import React from 'react';

// Styles
import {
  AboutContainer, MaisonContainer, AboutMaisonSection,
} from './styles/about/styles';

// Components
import ContactInfo from '../components/about/ContactDetails';
import AboutMe from '../components/about/AboutMe';
import TechnicalDetails from '../components/about/TechnicalDetails';

const AboutPage = () => (
  <AboutContainer>
    <MaisonContainer>
      <AboutMaisonSection>
        <ContactInfo />
        <AboutMe />
      </AboutMaisonSection>
      <TechnicalDetails />
    </MaisonContainer>
  </AboutContainer>
);

export default AboutPage;
