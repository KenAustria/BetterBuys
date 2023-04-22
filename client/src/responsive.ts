import { css, CSSObject } from 'styled-components';

export const mobile = (props: CSSObject) => {
    return css`
        @media only screen and (max-width: 360px) {
            ${props}
        }
    `;
};

export const tablet = (props: CSSObject) => {
    return css`
        @media only screen and (max-width: 768px) {
            ${props}
        }
    `;
};

export const desktop = (props: CSSObject) => {
    return css`
        @media only screen and (max-width: 1366px) {
            ${props}
        }
    `;
};
