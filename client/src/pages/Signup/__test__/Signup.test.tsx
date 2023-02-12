/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import Signup, { SignupTitle, SignupInput, SignupAgreement, SignupButton, LinkButton } from '../Signup';
import '@testing-library/jest-dom';
import { renderWithProviders } from '../../../utils/test-utils';
import { fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

describe('<Signup />', () => {
    it('should have the correct accessibility attributes for SignupTitle', () => {
        renderWithProviders(
            <Router>
                <SignupTitle aria-label="create an account heading" role="heading" tabIndex={0}>
                    CREATE AN ACCOUNT
                </SignupTitle>
            </Router>,
        );

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveAttribute('aria-label', 'create an account heading');
        expect(heading).toHaveAttribute('role', 'heading');
        expect(heading).toHaveAttribute('tabIndex', '0');
        expect(heading).toHaveTextContent('CREATE AN ACCOUNT');
    });

    it('should have the correct aria-label and role for SignupForm', () => {
        const { getByRole } = renderWithProviders(
            <Router>
                <Signup />
            </Router>,
        );
        const form = getByRole('form');
        expect(form).toHaveAttribute('aria-label', 'Sign up form');
    });

    it('should render the SignupInput field for username', () => {
        const { getByLabelText } = renderWithProviders(
            <Router>
                <SignupInput
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

    it('should render the SignupInput field for email', () => {
        const { getByLabelText } = renderWithProviders(
            <Router>
                <SignupInput
                    id="email"
                    value=""
                    aria-label="email"
                    placeholder="email"
                    type="text"
                    onChange={() => {}}
                />
            </Router>,
        );

        const input = screen.getByLabelText('email');
        expect(input).toBeInTheDocument();
    });

    it('should render the SignupInput field for password', () => {
        const { getByLabelText } = renderWithProviders(
            <Router>
                <SignupInput
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

    it('should have accessibility attributes for SignupAgreement', () => {
        renderWithProviders(
            <Router>
                <SignupAgreement aria-label="agreement" aria-hidden={false}>
                    By creating an account, I consent to the processing of my personal data in accordance with the{' '}
                    <b>PRIVACY POLICY</b>
                </SignupAgreement>
            </Router>,
        );

        const agreement = screen.getByLabelText('agreement');

        expect(agreement).toBeInTheDocument();
        expect(agreement.getAttribute('aria-label')).toBe('agreement');
        expect(agreement.getAttribute('aria-hidden')).toBe('false');
    });

    it('should render the SignupButton correctly', () => {
        renderWithProviders(
            <Router>
                <SignupButton
                    type="submit"
                    aria-label="sign up button"
                    aria-disabled={false}
                    role="button"
                    tabIndex={0}
                    onClick={() => {}}
                    disabled={false}
                >
                    SIGNUP
                </SignupButton>
            </Router>,
        );

        expect(screen.getByRole('button')).toHaveTextContent('SIGNUP');
        expect(screen.getByRole('button')).not.toBeDisabled();
    });

    it('should be disabled if the prop is set for SignupButton', () => {
        renderWithProviders(
            <Router>
                <SignupButton
                    type="submit"
                    aria-label="sign up button"
                    aria-disabled={true}
                    role="button"
                    tabIndex={0}
                    onClick={() => {}}
                    disabled={true}
                >
                    SIGNUP
                </SignupButton>
            </Router>,
        );

        expect(screen.getByRole('button')).toHaveTextContent('SIGNUP');
        expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should call the onClick handler when clicked for the SignupButton', () => {
        const handleClick = jest.fn();

        renderWithProviders(
            <Router>
                <SignupButton
                    type="submit"
                    aria-label="sign up button"
                    aria-disabled={false}
                    role="button"
                    tabIndex={0}
                    onClick={handleClick}
                    disabled={false}
                >
                    SIGNUP
                </SignupButton>
            </Router>,
        );

        fireEvent.click(screen.getByRole('button'));

        expect(handleClick).toHaveBeenCalled();
    });

    it('renders a link button with the correct text and aria-label for LinkButton', () => {
        renderWithProviders(
            <LinkButton type="link" role="link" aria-label="sign up link">
                SIGNIN ACCOUNT
            </LinkButton>,
        );

        const linkButtonText = screen.getByText('SIGNIN ACCOUNT');
        expect(linkButtonText).toBeInTheDocument();
        const linkButtonRole = screen.getByRole('link', { name: 'sign up link' });
        expect(linkButtonRole).toBeInTheDocument();
    });
});
