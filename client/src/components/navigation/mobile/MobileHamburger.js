import React, { Component } from 'react';

// Components
import MobileMenu from './MobileMenu';
// Components
import MenuLogo from './MenuLogo';
import MenuLinks from './MenuLinks';
import MenuFooter from './MenuFooter';

// Styles
import { Hamburger, BurgerBar, BurgerBarContainer } from './styles';

export default class MobileHamburger extends Component {
  constructor(props) {
    super(props);
    // this.state.clicks measures if it's the intial page load. When set to 0
    // the MobileMenu component sets the display of the mobile
    // menu to none, so to avoid the closeing animation from firing right when the page is loaded.
    // It's set back to zero upon page refreshing

    // this.state.MenuOpened monitors the open/closed state of the mobile menu. The MobileLinks components passes a boolean value back to this parent component that switches the open/closed state. This is so that the links in the menu close the menu when you click them.
    this.state = {
      menuOpened: false,
      clicks: 0,
    };
  }

  render() {
    const menuState = this.state;
    const { menuOpened } = this.state;

    const menuLinkClick = (info) => {
      if (info) {
        this.setState({ menuOpened: false });
      }
    };
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
        <MobileMenu data={menuState}>
          <MenuLogo />
          <MenuLinks linkClick={menuLinkClick} />
          <MenuFooter />
        </MobileMenu>
      </Hamburger>
    );
  }
}
