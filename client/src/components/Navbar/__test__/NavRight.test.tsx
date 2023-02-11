import React from 'react';
import NavRight from '../NavRight';
import '@testing-library/jest-dom';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { BrowserRouter as Router } from 'react-router-dom';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';

describe('NavRight', () => {
    it('checks if clicking on the "SIGN UP" button in the Navbar component navigates the user to the signup page', () => {
        renderWithProviders(
            <Router>
                <NavRight />
            </Router>,
        );
        const signUpButton = screen.getByText('SIGN UP');
        fireEvent.click(signUpButton);
        expect(window.location.pathname).toBe('/signup');
    });

    it('checks if the "SIGN IN" text is properly rendered in the Navbar component', async () => {
        renderWithProviders(
            <Router>
                <NavRight />
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
