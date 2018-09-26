import React from 'react';

// Assets
import MaisonLogoAlt from '../../assets/navbar/maison-logo-alt.svg';

import { MobileMenuLogo } from './styles';

const MenuLogo = () => (
  <MobileMenuLogo>
    <img src={MaisonLogoAlt} alt="maison logo" />
  </MobileMenuLogo>
);

export default MenuLogo;
