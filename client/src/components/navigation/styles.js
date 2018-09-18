import styled, { keyframes } from 'styled-components';
import { bounceInUp } from 'react-animations';

const slideUp = keyframes`${bounceInUp}`;

export const Bar = styled.div`
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

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const SiteLink = styled.div`
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

export const FooterContainer = styled.div`
    position: fixed;
    bottom: 18px;
    width: 100%;
    display: flex;
    justify-content: center;
    opacity: 0;
    animation: 1.5s ease-in ${slideUp} forwards;
    animation-delay: 1.5s;
`;

export const LinkSvg = styled.svg`
    transition: .2s;
    margin-left: 16px;
    margin-right: 16px;

    &:hover {
        fill: #3A6EA5;
        transition: .2s;  
    }
`;