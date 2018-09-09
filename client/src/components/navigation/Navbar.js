import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

// Assets
import PersonalLogo from '../assets/navbar/maison-logo.svg';

const Bar = styled.div`
  max-width: 100%;
  height: 55px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 4px #020202;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 10px;
  z-index: 99;
  background: #fff;
  /* This is the navbar logo home link wrapped in gatsby-link */
  & > a {
    display: flex;
    align-items: center;
  }
`;

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const SiteLink = styled.div`
  display: flex;
  align-items: center;
  margin: 6px;

  & > a {
    text-decoration: none;
    font-size: .8em;
    font-weight: 500;
    transition: .3s;
    color: #020202;

    &:hover {
      color: #3A6EA5;
      transition: .3s;
      letter-spacing: .2px;
    }
  }
`;


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
