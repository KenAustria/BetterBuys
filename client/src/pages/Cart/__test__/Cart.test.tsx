import React from 'react';
import Cart from '../Cart';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Cart', () => {
    it('should have the correct accessibility attributes for CartTitle', () => {
        renderWithProviders(
            <Router>
                <Cart aria-label="your bag">CREATE AN ACCOUNT</Cart>
            </Router>,
        );

        const heading = screen.getByRole('heading');

        expect(heading).toBeInTheDocument();
        expect(heading).toHaveAttribute('aria-label', 'your bag');
        expect(heading).toHaveAttribute('role', 'heading');
        expect(heading).toHaveAttribute('tabIndex', '0');
        expect(heading).toHaveTextContent('YOUR BAG');
    });
});
