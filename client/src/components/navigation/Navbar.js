import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

// Assets
import PersonalLogo from '../assets/navbar/maison-logo.svg';

// Styled Components
import { Bar, NavLinksContainer, SiteLink } from './styles';


const Navbar = () => (
  <Bar>
    <Link
      to="/"
    >
      <img src={PersonalLogo} alt="maison logo" />
    </Link>
    <NavLinksContainer>
      <SiteLink>
        <Link
          to="/about"
        >
        about
        </Link>
      </SiteLink>
      <SiteLink>
        <Link
          to="/"
        >
        contact
        </Link>
      </SiteLink>
      <SiteLink>
        <Link
          to="/first-post"
        >
        blog
        </Link>
      </SiteLink>
      <SiteLink>
        <Link
          to="/"
        >
        projects
        </Link>
      </SiteLink>
    </NavLinksContainer>

  </Bar>
);

export default Navbar;
