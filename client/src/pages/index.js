import React from 'react';

import { HeroContainer } from './styles/index/styles';

const IndexPage = () => (
  <HeroContainer>
    <span>
      <p>Hi there. My name is Maison</p>
      <p>I&apos;m a web developer living life in Florida.</p>
    </span>
    <span>
      <p>Feel free to check out my</p>
      <p>blog, projects, or if you have a Q, contact me anytime.</p>
    </span>
    <span>
      <p>This website was built with React,</p>
      <p>Gatsby, GraphQL, NodeJS, and good ole fashioned passion.</p>
    </span>
  </HeroContainer>
);

export default IndexPage;
