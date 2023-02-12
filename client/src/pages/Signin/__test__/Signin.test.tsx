/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import Signin, { SigninTitle, SigninInput, SigninButton, LinkButton } from '../Signin';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../../utils/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Signin', () => {
    it('should have the correct accessibility attributes for SigninTitle', () => {
        renderWithProviders(
            <Router>
                <SigninTitle aria-label="signin heading" role="heading" tabIndex={0}>
                    SIGN IN
                </SigninTitle>
            </Router>,
        );

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveAttribute('aria-label', 'signin heading');
        expect(heading).toHaveAttribute('role', 'heading');
        expect(heading).toHaveAttribute('tabIndex', '0');
        expect(heading).toHaveTextContent('SIGN IN');
    });

    it('should have the correct aria-label and role for SigninForm', () => {
        const { getByRole } = renderWithProviders(
            <Router>
                <Signin />
            </Router>,
        );
        const form = getByRole('form');
        expect(form).toHaveAttribute('aria-label', 'Sign in form');
    });

    it('should render the SigninInput field for username', () => {
        const { getByLabelText } = renderWithProviders(
            <Router>
                <SigninInput
                    id="username"
                    value=""
                    aria-label="username"
                    placeholder="username"
                    type="text"
                    onChange={() => {}}
                />
            </Router>,
        );

        const input = screen.getByLabelText('username');
        expect(input).toBeInTheDocument();
    });

    it('should render the SigninInput field for password', () => {
        const { getByLabelText } = renderWithProviders(
            <Router>
                <SigninInput
                    id="password"
                    value=""
                    aria-label="password"
                    placeholder="password"
                    type="text"
                    onChange={() => {}}
                />
            </Router>,
        );

        const input = screen.getByLabelText('password');
        expect(input).toBeInTheDocument();
    });

    it('should render the SigninButton correctly', () => {
        renderWithProviders(
            <Router>
                <SigninButton
                    type="submit"
                    aria-label="sign in button"
                    aria-disabled={false}
                    role="button"
                    tabIndex={0}
                    onClick={() => {}}
                    disabled={false}
                >
                    SIGNIN
                </SigninButton>
            </Router>,
        );

        expect(screen.getByRole('button')).toHaveTextContent('SIGNIN');
        expect(screen.getByRole('button')).not.toBeDisabled();
    });

    it('should be disabled if the prop is set for SigninButton', () => {
        renderWithProviders(
            <Router>
                <SigninButton
                    type="submit"
                    aria-label="sign in button"
                    aria-disabled={true}
                    role="button"
                    tabIndex={0}
                    onClick={() => {}}
                    disabled={true}
                >
                    SIGNIN
                </SigninButton>
            </Router>,
        );

        expect(screen.getByRole('button')).toHaveTextContent('SIGNIN');
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should call the onClick handler when clicked for the SigninButton', () => {
        const handleClick = jest.fn();

        renderWithProviders(
            <Router>
                <SigninButton
                    type="submit"
                    aria-label="sign in button"
                    aria-disabled={false}
                    role="button"
                    tabIndex={0}
                    onClick={handleClick}
                    disabled={false}
                >
                    SIGNIN
                </SigninButton>
            </Router>,
        );

        fireEvent.click(screen.getByRole('button'));

        expect(handleClick).toHaveBeenCalled();
    });

    it('renders a link button with the correct text and aria-label for LinkButton', () => {
        renderWithProviders(
            <LinkButton type="link" role="link" aria-label="sign in link">
                SIGNIN ACCOUNT
            </LinkButton>,
        );

        const linkButtonText = screen.getByText('SIGNIN ACCOUNT');
        expect(linkButtonText).toBeInTheDocument();
        const linkButtonRole = screen.getByRole('link', { name: 'sign in link' });
        expect(linkButtonRole).toBeInTheDocument();
    });
});
