import React from 'react';
import PropTypes from 'prop-types';

import styled, { keyframes } from 'styled-components';
import { bounceInDown, bounceOutUp } from 'react-animations';
import { media } from '../../../utils/cssMediaTemplate';


const bounceDown = keyframes`${bounceInDown}`;
const bounceUp = keyframes`${bounceOutUp}`;

const MobileMenuOpened = styled.div`
    display: none;
    ${media.medium`
        display: flex;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 55px;
        right: 0;
        background: #020202;
        animation: ${bounceDown} 1s ease-in forwards;
    `}
`;

const MobileMenuClosed = styled.div`
    display: none;
    ${media.medium`
        display: block;
        width: 100%;
        height: 100vh;
        position: absolute;
        top: 55px;
        right: 0;
        background: #020202;
        animation: ${bounceUp} 1s ease-in forwards;
    `}
`;

const MobileMenuOnLoad = styled.div`
    display: none;
`;

const MobileMenu = (props) => {
  const { clicks, menuOpened } = props.data;

  const Menu = () => (menuOpened ? <MobileMenuOpened /> : <MobileMenuClosed />);


  return (
    <div>
      { clicks === 0 ? <MobileMenuOnLoad /> : <Menu /> }
    </div>
  );
};

export default MobileMenu;
