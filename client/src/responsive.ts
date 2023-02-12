import { css } from 'styled-components';

export const extraSmallDevicePortrait = (props) => {
    return css`
        @media (min-width: 576px) {
            ${props}
        }
    `;
};

export const smallDeviceLandscape = (props) => {
    return css`
        @media (min-width: 576px) {
            ${props}
        }
    `;
};

export const mediumDevice = (props) => {
    return css`
        @media (min-width: 768px) {
            ${props}
        }
    `;
};

export const largeDevice = (props) => {
    return css`
        @media (min-width: 992px) {
            ${props}
        }
    `;
};

export const extraLargeDevice = (props) => {
    return css`
        @media (min-width: 1200px) {
            ${props}
        }
    `;
};

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 360px) {
            ${props}
        }
    `;
};

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 768px) {
            ${props}
        }
    `;
};

export const desktop = (props) => {
    return css`
        @media only screen and (max-width: 1366px) {
            ${props}
        }
    `;
};
