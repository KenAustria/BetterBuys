import React from 'react';
import Categories from '../Categories';
import { screen } from '@testing-library/react';
import { categories } from '../../../data';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderWithProviders } from '../../../utils/test-utils';

describe('Categories', () => {
    it('renders all categories', async () => {
        renderWithProviders(
            <Router>
                <Categories />
            </Router>,
        );
        const container = screen.getByRole('img', { name: 'categories container' });
        expect(container).toBeDefined();
        categories.forEach((category, index) => {
            const categoryEl = screen.getAllByRole('img')[index];
            expect(categoryEl).toBeDefined();
        });
    });
});
