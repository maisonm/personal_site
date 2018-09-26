import React, { Component } from 'react';

import styled from 'styled-components';
import { media } from '../../../utils/cssMediaTemplate';

// Components
import MobileMenu from './MobileMenu';

const Hamburger = styled.div`
    display: none;
    ${media.medium`
        display: flex;
        height: 25px;
        width: 25px;
    `}
`;
const BurgerBarContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
`;
const BurgerBar = styled.div`
    background: #020202;
    height: 3px;
    transition: .3s;
`;

export default class MobileHamburger extends Component {
  constructor(props) {
    super(props);
    this.state = { menuOpened: false, clicks: 0 };
  }

  render() {
    const menuState = this.state;
    const { menuOpened } = this.state;

    const openMenu = (e) => {
      this.setState({ clicks: 1 });

      if (menuOpened) {
        this.setState({
          menuOpened: false,
        });
      } else {
        this.setState({
          menuOpened: true,
        });
      }
    };
    return (
      <Hamburger>
        <BurgerBarContainer onClick={openMenu}>
          <BurgerBar />
          <BurgerBar />
          <BurgerBar />
        </BurgerBarContainer>
        <MobileMenu data={menuState} />
      </Hamburger>
    );
  }
}
