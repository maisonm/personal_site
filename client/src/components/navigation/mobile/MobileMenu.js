import React from 'react';
import PropTypes from 'prop-types';

// Styles
import { MobileMenuOpened, MobileMenuClosed, MobileMenuOnLoad } from './styles';


const MobileMenu = (props) => {
  const { clicks, menuOpened } = props.data;

  const MenuContent = () => (
    <p> Hello </p>
  );

  const Menu = () => (menuOpened ? (
    <MobileMenuOpened>
      <MenuContent />
    </MobileMenuOpened>
  ) : <MobileMenuClosed />);


  return (
    <div>
      { clicks === 0 ? <MobileMenuOnLoad /> : <Menu /> }
    </div>
  );
};

MobileMenu.propTypes = {
  clicks: PropTypes.number,
  menuOpened: PropTypes.bool,
};

export default MobileMenu;
