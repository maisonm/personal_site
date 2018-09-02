import React from 'react';
// import Link from 'gatsby-link';
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
`;

const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

const SiteLink = styled.div`
  display: flex;
  align-items: center;
  font-size: .8em;
  margin: 6px;
  cursor: pointer;
  transition: .3s;
  font-weight: 500;

  &:hover {
    color: #3A6EA5;
    transition: .3s;
    letter-spacing: .2px;
  }
`;


const Navbar = () => (
  <Bar>
    <img src={PersonalLogo} alt="maison logo" />
    <NavLinksContainer>
      <SiteLink>about</SiteLink>
      <SiteLink>contact</SiteLink>
      <SiteLink>blog</SiteLink>
      <SiteLink>projects</SiteLink>
    </NavLinksContainer>

  </Bar>
);

export default Navbar;
