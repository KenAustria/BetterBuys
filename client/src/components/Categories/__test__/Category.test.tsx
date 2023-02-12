import React from 'react';
import Category from '../Category';
import '@testing-library/jest-dom';
import { categories } from '../../../data';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';
import { BrowserRouter as Router, Link } from 'react-router-dom';

describe('Category', () => {
    it('renders same text in button of Category component', async () => {
        renderWithProviders(
            <Router>
                <Category
                    category={{
                        id: 0,
                        img: '',
                        title: '',
                        category: '',
                    }}
                />
            </Router>,
        );
        const categoryButton = screen.getByRole('button', { name: /SHOP NOW/i });
        expect(categoryButton).toBeInTheDocument();
    });

    it('should render the correct category title and image', () => {
        const category = categories[0];
        renderWithProviders(
            <Router>
                <Link to={`/products/${category.category}`}>
                    <img src={category.img} alt={category.title} />
                    <div>
                        <h1>{category.title}</h1>
                        <button>SHOP NOW</button>
                    </div>
                </Link>
            </Router>,
        );
        expect(screen.getByAltText(category.title)).toHaveAttribute('src', category.img);
        expect(screen.getByText(category.title)).toBeInTheDocument();
    });
});
