import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const HeroContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 500;
  letter-spacing: .1px;

  & span {
    width: 50%;
    line-height: 8px;
  }

  & span > p {
    font-size: .8em;
    line-height: 5px;
  }

  & span:nth-child(1) {
    border-bottom: solid 1px #3A6EA5;
    text-align: left;
  }
  & span:nth-child(2) {
    text-align: right;
  }
  & span:nth-child(3) {
    border-top: solid 1px #3A6EA5;
    text-align: left;
  }

  @media (max-width: 420px) {
    span {
      width: 80%;
    }

    span > p {
      font-size: .7em;
    }
  }
`;

const IndexPage = () => (
  <HeroContainer>
    <span>
      <p>Hi there. My name is Maison</p>
      <p>I'm a web developer living life in Florida.</p>
    </span>
    <span>
      <p>Feel free to check out my</p>
      <p>blog, projects, or if you have a Q, contact me.</p>
    </span>
    <span>
      <p>This website was built with React,</p>
      <p>Gatsby, NodeJS, and good ole fashioned love.</p>
    </span>
  </HeroContainer>
)

export default IndexPage;
