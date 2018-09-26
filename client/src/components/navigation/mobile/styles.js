import styled, { keyframes } from 'styled-components';

import { bounceInDown, bounceOutUp } from 'react-animations';
import { media } from '../../../utils/cssMediaTemplate';

const bounceDown = keyframes`${bounceInDown}`;
const bounceUp = keyframes`${bounceOutUp}`;

export const MobileMenuOpened = styled.div`
display: none;
${media.medium`
    display: flex;
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 55px;
    right: 0;
    background: #a8a8a8;
    animation: ${bounceDown} 1s ease-in forwards;
    border: solid red;
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
    animation: ${bounceUp} 1s ease-in forwards;
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