import styled, { keyframes } from 'styled-components';

import { bounceInLeft, bounceInRight, fadeIn, bounceInUp } from 'react-animations';
import { media } from '../../../utils/cssMediaTemplate';


const bounceLeft = keyframes`${bounceInLeft}`;
const bounceRight = keyframes`${bounceInRight}`;

const bounceUp = keyframes`${bounceInUp}`;

export const AboutContainer = styled.div`
    position: fixed;
    top: 0;
    z-index: -99;
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${media.medium`
        height: 780px;
        position: relative;
        flex-direction: column;
        z-index: 1;
        background: #ffffff;
        padding-top: 14px;
    `}
    
`;

export const HeaderCard = styled.div`
    background: #020202;
    color: #c0c0c0;
    min-width: 130px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2px;

    & > p {
        font-size: .85em;
        font-style: italic;
        letter-spacing: .2px;
    }

    ${media.medium`
        display: none;
    `}
`;

export const MobileHeaderCard = styled.div`
        display: none;
        ${media.medium`
            display: flex;
            background: #020202;
            color: #c0c0c0;
            min-width: 130px;
            height: 25px;
            justify-content: space-around;
            align-items: center;
            border-radius: 2px;

            & > p {
                font-size: .85em;
                font-style: normal;
                letter-spacing: .2px;
            }

            & > p:nth-child(2) {
                font-style: regu;
                font-weight: bold;
                color: #FFFFFF;
                font-size: 1em;
            }
        `}
`;

export const MaisonContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 75%;
    
    ${media.medium`
    `}
`;

export const ContactDetails = styled.div`
    display: flex;
    align-items: center;
`;

export const TheDeets = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;
    width: 100%;

    & > p {
        font-size: .75em;
        font-weight: 700;
        letter-spacing: .1px;
        margin-left: 8px;
        margin-right: 8px;
        font-style: italic;
        display: flex;
        align-items: center;

        & > img {
            margin-right: 4px;
        }
    }

    & > a {
        font-size: .75em;
        font-weight: 700;
        letter-spacing: .1px; 
        margin-left: 8px;
        margin-right: 8px;
        font-style: italic;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: #020202;
        transition: .2s;

        &:hover {
            color: #3A6EA5;
        }

        & > img {
            margin-right: 4px;
        }
    }
    
    ${media.medium`
        display: none;
    `}
`;

export const AboutMeText = styled.div`
    font-weight: 500;
    margin-top: 10px;

    & > p {
        font-size: .8em;
        line-height: 16px;

        & > span {
            font-size: .75em;
            font-style: italic;
        }
    }
`;

export const AboutMaisonSection = styled.div`
    width: 100%;
    margin-bottom: 12px;
    animation: 1s ease ${bounceLeft} forwards;

    ${media.medium`
        animation: 1.5s ease ${bounceUp} forwards;
    `}
`;

export const MaisonTechnicalSection = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-top: 10px;
    animation: 1s ease ${bounceRight} forwards;

    ${media.medium`
        animation: 1.5s ease ${bounceUp} forwards;
    `}
`;

export const OneDayBlock = styled.div`
    width: 10%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;

    & > p {
        line-height: 0;
        font-size: 2.4em;
        font-weight: 700;
    }

    & > p:nth-child(1) {
        margin-bottom: -14px;
    }
    & > p:nth-child(2) {
        margin-bottom: -16px;
        color: #3A6EA5;
    }
    & > p:nth-child(3) {
        margin-bottom: -13px;
    }
    & > p:nth-child(4) {
        margin-bottom: -14px;
        color: #c0c0c0;
    }

    ${media.medium`
        display: none;
    `}
`;

export const TechnicalContainer = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`;

export const TechnicalSection = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`;

export const TechnicalSkillLabel = styled.p`
    font-size: .85em;
    font-weight: 700;
    margin-bottom: -6px;
    font-style: italic;
`;

export const TechnicalSkillBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: -10px;

    & > p {
        font-size: .8em;
    }
`;

export const TechIcons = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;

& > img {
  margin-left: 15px;
}
`;
