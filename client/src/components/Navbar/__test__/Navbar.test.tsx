import React from 'react';
import Navbar from '../Navbar';
import '@testing-library/jest-dom';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, screen } from '@testing-library/react';
import { Language, Logo, SearchInput } from '../Navbar';
import { renderWithProviders } from '../../../utils/test-utils';

describe('Navbar', () => {
    it('checks if the text "EN" is rendered as a span element in the Navbar component', async () => {
        renderWithProviders(
            <Router>
                <Language aria-label="language">EN</Language>
            </Router>,
        );
        const spanElement = screen.getByText(/EN/i);
        expect(spanElement).toBeInTheDocument();
        expect(spanElement).toHaveAttribute('aria-label', 'language');
    });

    it('checks if a search input is present in the Navbar component and if the input value can be changed when the user interacts with it', async () => {
        renderWithProviders(
            <Router>
                <SearchInput aria-label="Search" />
            </Router>,
        );
        const input = screen.getByLabelText('Search');
        expect(input).toBeInTheDocument();
        fireEvent.change(input, { target: { value: 'Better Buys' } });
        expect(input).toHaveValue('Better Buys');
    });

    it('checks that the Search icon from Material UI is properly rendered in the Navbar component', async () => {
        renderWithProviders(
            <Router>
                <Navbar />
            </Router>,
        );
        expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    });

    it('checks that an h1 heading element is properly rendered in the Navbar component', async () => {
        renderWithProviders(
            <Router>
                <Logo role="heading" aria-label="Better Buys">
                    Better Buys
                </Logo>
            </Router>,
        );
        const heading = screen.getByRole('heading', { name: 'Better Buys' });
        expect(heading).toBeInTheDocument();
        expect(heading).toHaveTextContent('Better Buys');
    });

    it('checks if clicking on the "SIGN UP" button in the Navbar component navigates the user to the signup page', () => {
        renderWithProviders(
            <Router>
                <Navbar />
            </Router>,
        );
        const signUpButton = screen.getByText('SIGN UP');
        fireEvent.click(signUpButton);
        expect(window.location.pathname).toBe('/signup');
    });

    it('checks if the "SIGN IN" text is properly rendered in the Navbar component', async () => {
        renderWithProviders(
            <Router>
                <Navbar />
            </Router>,
        );
        const signinElement = screen.getByText(/SIGN IN/i);
        expect(signinElement).toBeInTheDocument();
    });

    it('checking that the shopping cart icon is rendered within the component', () => {
        renderWithProviders(<ShoppingCartOutlined data-testid="cart-icon" />);
        expect(screen.getByTestId('cart-icon')).toBeInTheDocument();
    });
});
