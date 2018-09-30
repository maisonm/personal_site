import styled, { keyframes } from 'styled-components';

import { fadeInUp } from 'react-animations';

import { media } from '../../utils/cssMediaTemplate';

const fadeUp = keyframes`${fadeInUp}`;

export const BlogPostCard = styled.div`
  min-height: 220px;
  min-width: 50%;
  box-shadow: 0px 0px 8px #b3b3b3;
  border-radius: 2px;
  transition: .1s;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #fff;
  padding-top: 4px;
  padding-bottom: 4px;
  transition: all cubic-bezier(.42,.16,.26,1.4) 400ms;
  margin-bottom: 14px;
  position: relative;
  animation: .5s ease ${fadeUp} forwards;

    & > p {
      width: 80%;
    }
    
    &:hover {
      transition: all cubic-bezier(.42,.16,.26,1.4) 200ms;
      box-shadow: 0px 0px 12px #a1bede;
      transform: translateY(-1px);
    }

    ${media.medium`
      min-width: 80%;
    `}
`;

export const BlogTitle = styled.p`
  font-size: 1.4em;
  color: #020202;
  font-weight: 700;
  margin-top: -5px;

`;

export const BlogDescription = styled.p`
  font-size: .75em;
  margin-top: -5px;
  letter-spacing: .2px;
`;

export const BlogAuthorDetails = styled.p`
  font-size: .6em;
  color: #999999;
  text-align: right;
  letter-spacing: .1px;

  & > span {
    font-size: 1em;
  }
`;

export const BlogTagIcons = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;

  & > p {
    margin-right: 6px;
    color: #999999;
    font-weight: 400;
    letter-spacing: .1px;
    font-size: .5em;
  }

  & img {
    margin-left: 10px;
    width: 16px;
  }
`;

export const BlogReadLink = styled.div`
  position: absolute;
  bottom: 18px;
  cursor: pointer;

  & > a {
    text-decoration: none;
    font-size: .8em;
    font-weight: 500;
    color: #020202;
    transition: .2s;

    &:hover {
      color: #3a6ea5;
      transition: .2s;
    }
  }
`;