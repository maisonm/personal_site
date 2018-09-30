import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

import { fadeIn, fadeOut, bounceOutRight } from 'react-animations';

import { media } from '../../../utils/cssMediaTemplate';

const fadeInto = keyframes`${fadeIn}`;
const bounceOut = keyframes`${bounceOutRight}`;

const DrowDownHeaderContainer = styled.div`
    position: relative;
`;

const DropDownMenu = styled.div`
    width: 300px;
    height: 200px;
    position: absolute;
    left: 0;
    background: blue;
    animation: ${fadeInto} .1s ease-in forwards;

    ${media.small`
        width: 250px;
    `}
`;

const DropDownMenuClosed = styled.div`
    width: 300px;
    height: 200px;
    position: absolute;
    left: 0;
    background: blue;
    animation: ${bounceOut} .5s ease-in forwards;

    ${media.small`
        width: 250px;
    `}
`;

const DropDownMenuOnLoad = styled.div`
    display: none;
`;

export default class DropDownHeader extends Component {
  constructor(props) {
    super(props);
    const { children } = this.props;

    this.state = {
      kids: children,
      headerOpen: false,
      clicks: 0,
    };
  }

  render() {
    const { kids, headerOpen, clicks } = this.state;

    const headerClick = () => {
      this.setState({ clicks: 1 });
      if (headerOpen) {
        this.setState({ headerOpen: false });
      } else {
        this.setState({ headerOpen: true });
      }
    };

    const AboutDropDownDetails = () => (
      <p> Hello </p>
    );

    const DropDown = () => (headerOpen ? (
      <DropDownMenu>
        <AboutDropDownDetails />
      </DropDownMenu>
    ) : <DropDownMenuClosed />);

    return (
      <DrowDownHeaderContainer onClick={headerClick}>
        { kids }
        { clicks === 0 ? <DropDownMenuOnLoad /> : <DropDown /> }
      </DrowDownHeaderContainer>
    );
  }
}
