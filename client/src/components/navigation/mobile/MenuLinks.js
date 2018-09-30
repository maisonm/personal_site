import React from 'react';
import Link from 'gatsby-link';

// Styles
import { MobileMenuLinks } from './styles';

const MenuLinks = (props) => {
  const { linkClick } = props;

  const closeMenu = () => {
    linkClick(true);
  };

  return (
    <MobileMenuLinks>
      <Link onClick={closeMenu} to="/"> home </Link>
      <Link onClick={closeMenu} to="/blog">blog</Link>
      <Link onClick={closeMenu} to="/about">about </Link>
      <Link onClick={closeMenu} to="/projects">projects</Link>
      <a href="mailto:maison.moa@gmail.com">contact</a>
    </MobileMenuLinks>
  );
};

export default MenuLinks;
