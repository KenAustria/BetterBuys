import React from 'react';
import {
    ProductTitle,
    ProductImage,
    ProductDescription,
    ProductPrice,
    ProductFilterTitle,
    AddToCartButton,
} from '../ProductProfile';
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { Add, Remove } from '@material-ui/icons';

describe('ProductProfile', () => {
    it('should display the product title', () => {
        const product = {
            productTitle: 'Test Product',
        };
        const { getByLabelText } = renderWithProviders(
            <Router>
                <ProductTitle aria-label="product title">{product.productTitle}</ProductTitle>
            </Router>,
        );
        const productTitle = screen.getByLabelText('product title');
        expect(productTitle).toBeInTheDocument();
        expect(productTitle).toHaveTextContent(product.productTitle);
    });

    it('renders the image with the given src and alt', () => {
        const product = { productImage: 'https://example.com/product.jpg' };

        renderWithProviders(
            <Router>
                <ProductImage src={product.productImage} alt="product image" />
            </Router>,
        );

        const image = screen.getByAltText('product image');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', 'https://example.com/product.jpg');
    });

    it('should render the product description', () => {
        const { getByLabelText } = renderWithProviders(
            <Router>
                <ProductDescription aria-label="product description">Product description</ProductDescription>
            </Router>,
        );
        const productDescription = screen.getByLabelText('product description');
        expect(productDescription).toBeInTheDocument();
    });

    it('renders the product price', () => {
        const product = { productPrice: 9.99 };
        const { getByText } = renderWithProviders(
            <Router>
                <ProductPrice aria-label="product price">${product.productPrice}</ProductPrice>
            </Router>,
        );

        expect(screen.getByText('$9.99')).toBeInTheDocument();
    });

    it('should display the color filter title', () => {
        const { getByLabelText } = renderWithProviders(
            <Router>
                <ProductFilterTitle aria-label="color filter">Color</ProductFilterTitle>
            </Router>,
        );
        const colorFilter = screen.getByLabelText('color filter');
        expect(colorFilter).toHaveTextContent('Color');
    });

    it('should display the size filter title', () => {
        const { getByLabelText } = renderWithProviders(
            <Router>
                <ProductFilterTitle aria-label="size filter">Size</ProductFilterTitle>
            </Router>,
        );
        const colorFilter = screen.getByLabelText('size filter');
        expect(colorFilter).toHaveTextContent('Size');
    });

    it('should render Remove Icon to have aria-label with value "Remove"', () => {
        const { getByLabelText } = renderWithProviders(
            <Router>
                <Remove role="button" aria-label="remove" />
            </Router>,
        );
        const removeIcon = screen.getByLabelText('remove');
        expect(removeIcon).toBeInTheDocument();
    });

    it('should render Add Icon to have aria-label with value "Add"', () => {
        const { getByLabelText } = renderWithProviders(
            <Router>
                <Add role="button" aria-label="add" />
            </Router>,
        );
        const addIcon = screen.getByLabelText('add');
        expect(addIcon).toBeInTheDocument();
    });

    it('renders the text "ADD TO CART"', () => {
        const { getByText } = renderWithProviders(
            <Router>
                <AddToCartButton>ADD TO CART</AddToCartButton>
            </Router>,
        );
        expect(screen.getByText('ADD TO CART')).toBeInTheDocument();
    });

    it('triggers the onClick function when clicked', () => {
        const handleClick = jest.fn();
        const { getByText } = renderWithProviders(
            <Router>
                <AddToCartButton onClick={handleClick}>ADD TO CART</AddToCartButton>
            </Router>,
        );
        fireEvent.click(screen.getByText('ADD TO CART'));
        expect(handleClick).toHaveBeenCalled();
    });
});
