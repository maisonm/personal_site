import React from 'react';
import Link from 'gatsby-link';

// Assets
import PersonalLogo from '../assets/navbar/maison-logo.svg';

// Styles
import { Bar, NavLinksContainer, SiteLink } from './styles';

// Components
import MobileMenu from './mobile/MobileMenu';


const Navbar = () => (
  <Bar>
    <Link
      to="/"
    >
      <img src={PersonalLogo} alt="maison logo" />
    </Link>
    <MobileMenu />
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
          to="/blog"
        >
        blog
        </Link>
      </SiteLink>
      <SiteLink>
        <Link
          to="/projects"
        >
        projects
        </Link>
      </SiteLink>
      <SiteLink>
        <a href="mailto:maison.moa@gmail.com">
        contact me
        </a>
      </SiteLink>
    </NavLinksContainer>

  </Bar>
);

export default Navbar;
