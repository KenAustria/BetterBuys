import { css } from 'styled-components';

export const mobile = props => {
	return css`
    @media only screen and (max-width: 360px) {
      ${props}
    }
  `;
};

export const tablet = props => {
	return css`
    @media only screen and (max-width: 768px) {
      ${props}
    }
  `;
};

export const desktop = props => {
	return css`
    @media only screen and (max-width: 1366px) {
      ${props}
    }
  `;
};