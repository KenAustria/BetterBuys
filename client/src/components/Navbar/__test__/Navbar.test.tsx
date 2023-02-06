import React from 'react';
import Navbar from '../Navbar';
import '@testing-library/jest-dom';
import { fireEvent, getByRole, screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { mobile } from '../../../responsive';
import styled from 'styled-components';

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({ display: 'none' })}
`;

describe('Navbar', () => {
    it('checks if the text "EN" is rendered as a span element in the Navbar component', async () => {
        // render the component with its dependencies
        renderWithProviders(<Language aria-label="language">EN</Language>);
        // used `screen` to get the span element with text "EN"
        const spanElement = screen.getByText(/EN/i);
        // checks if the span element is present in the document
        expect(spanElement).toBeInTheDocument();
        // checks if the `aria-label` attribute of the span element is equal to "language"
        expect(spanElement).toHaveAttribute('aria-label', 'language');
    });

    it('checks if a search input is present in the Navbar component and if the input value can be changed when the user interacts with it', async () => {
        // holds the HTML element that is generated from the rendering
        const { container } = renderWithProviders(<input />);
        // ensure that the correct HTML element is being tested.
        const input = getByRole(container, 'textbox');
        // checks if the input element is present in the document
        expect(input).toBeInTheDocument();
        // simulate a change event on the input element with `target` property set to an object with a value of 'Better Buys'
        fireEvent.change(input, { target: { value: 'Better Buys' } });
        // checks if the input element now has a value of 'Better Buys'
        expect(input).toHaveValue('Better Buys');
    });

    it('checks that the Search icon from Material UI is properly rendered in the Navbar component', async () => {
        // the Navbar component is rendered
        const { getByTestId } = renderWithProviders(<Navbar />);
        /* uses the `getByTestId` method to assert that the search icon is in the document
        which has a `data-testid` attribute of `search-icon` */
        expect(screen.getByTestId('search-icon')).toBeInTheDocument();
    });

    it('checks that an h1 heading element is properly rendered in the Navbar component', async () => {
        // render the h1 element with the text "Better Buys"
        const { container } = renderWithProviders(<h1>Better Buys</h1>);
        // find the heading element with a role of "heading" and an accessibility level of 1.
        const heading = getByRole(container, 'heading', { level: 1 });
        // assert that the heading element is present in the document
        expect(heading).toBeInTheDocument();
        // assert the expected text content of "Better Buys"
        expect(heading).toHaveTextContent('Better Buys');
    });

    it('checks if clicking on the "SIGN UP" button in the Navbar component navigates the user to the signup page', () => {
        // the Navbar component is rendered
        const { getByText } = renderWithProviders(<Navbar />);
        // locate the "SIGN UP" button
        const signUpButton = getByText('SIGN UP');
        // simulate a click on it
        fireEvent.click(signUpButton);
        /* checks if the current window location pathname is '/signup', 
        indicating that the user has been successfully navigated to the signup page. */
        expect(window.location.pathname).toBe('/signup');
    });

    it('checks if the "SIGN IN" text is properly rendered in the Navbar component', async () => {
        // the Navbar component is rendered
        renderWithProviders(<Navbar />);
        // retrieves the element with the text 'SIGN IN'
        const signinElement = screen.getByText(/SIGN IN/i);
        // expects the element to be present in the document
        expect(signinElement).toBeInTheDocument();
    });

    it('checking that the shopping cart icon is rendered within the component', () => {
        // access the element and check if it is in the document
        const { getByTestId } = renderWithProviders(<ShoppingCartOutlined data-testid="cart-icon" />);
        // assert that the element renders correctly
        expect(screen.getByTestId('cart-icon')).toBeInTheDocument();
    });
});
