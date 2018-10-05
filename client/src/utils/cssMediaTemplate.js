import { css } from 'styled-components';

const screenSizes = {
  desktop: 1250, // Macbook 13"
  tabletXl: 1024, // iPad Pro
  tablet: 768, // iPad
  medium: 420, // iPhone 7/8+
  small: 320, // iPhone 5/SE
};

const media = Object.keys(screenSizes).reduce((acc, label) => {
  const emSize = screenSizes[label] / 16;
  acc[label] = (...args) => css`
        @media (max-width: ${emSize}em) {
            ${css(...args)}
        }
    `;
  return acc;
}, {});

export default { media };
