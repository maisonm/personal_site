import React from 'react';

import styled from 'styled-components';
import { media } from '../../../utils/cssMediaTemplate';

const MobileMenuContainer = styled.div`
    border: solid;

    ${media.medium`
        border: solid red;
    `}
`;

const MobileMenu = () => (
  <MobileMenuContainer />
);

export default MobileMenu;
