import styled, { keyframes } from 'styled-components';

import { bounceInDown, bounceOutUp } from 'react-animations';
import { media } from '../../../utils/cssMediaTemplate';

const bounceDown = keyframes`${bounceInDown}`;
const bounceUp = keyframes`${bounceOutUp}`;

export const MobileMenuOpened = styled.div`
display: none;
${media.medium`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 55px;
    right: 0;
    background: #020202;
    animation: ${bounceDown} 1s ease-in forwards;
    color: #C0C0C0;
`}
`;

export const MobileMenuClosed = styled.div`
display: none;
${media.medium`
    display: block;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 55px;
    right: 0;
    background: #020202;
    animation: ${bounceUp} .8s ease-in forwards;
`}
`;

export const MobileMenuOnLoad = styled.div`
display: none;
`;

export const Hamburger = styled.div`
    display: none;
    ${media.medium`
        display: flex;
        height: 25px;
        width: 25px;
    `}
`;
export const BurgerBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
`;
export const BurgerBar = styled.div`
    background: #020202;
    height: 3px;
    transition: .3s;
`;

export const MobileMenuLogo = styled.div`
    & > img {
      width: 48px;
    }
`;

export const MobileMenuLinks = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 250px;

    & > a {
        text-decoration: none;
        color: #C0C0C0;
        text-align: center;
        font-size: 1.5em;
    }
`;

export const MobileMenuFooter = styled.div`
    padding: 4px;
`;

export const MobileLinkSvg = styled.svg`
    margin-left: 16px;
    margin-right: 16px;
    fill: #3A6EA5;
`;