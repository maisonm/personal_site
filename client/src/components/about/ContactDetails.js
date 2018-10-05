import React from 'react';

// Assets
import Email from '../assets/about/email.svg';
import LinkIcon from '../assets/about/link.svg';
import LocationDrop from '../assets/about/location.svg';

// Components
import DropDownHeader from './mobile/DropDownHeader';

// Styles
import { ContactDetails, HeaderCard, MobileHeaderCard, TheDeets } from '../../styles/about/styles';


const ContactInfo = () => (
  <ContactDetails>

    <DropDownHeader>
      <MobileHeaderCard>
        <p> Maison Moa </p>
        <p> &or; </p>
      </MobileHeaderCard>
    </DropDownHeader>

    <HeaderCard><p>Maison Moa</p></HeaderCard>
    <TheDeets>
      <p>
        <img src={LocationDrop} alt="location drop" />
            Central Florida
      </p>
      <a href="mailto:maison.moa@gmail.com">
        <img src={Email} alt="email icon" />
            maison.moa@gmail.com
      </a>
      <a href="https://github.com/maisonm" target="_blank" rel="noopener noreferrer">
        <img src={LinkIcon} alt="link icon" />
            Github.com/maisonm
      </a>
      <a href="https://linkedin.com/in/maisonmoa" target="_blank" rel="noopener noreferrer">
        <img src={LinkIcon} alt="link icon" />
           Linkedin.com/in/maisonmoa
      </a>
    </TheDeets>
  </ContactDetails>

);

export default ContactInfo;
