import React, { Component } from 'react';

// Components
import MobileMenu from './MobileMenu';

// Styles
import { Hamburger, BurgerBar, BurgerBarContainer } from './styles';

export default class MobileHamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpened: false,
      clicks: 0,
    };
  }

  render() {
    const menuState = this.state;
    const { menuOpened } = this.state;

    const openMenu = () => {
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
