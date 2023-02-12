import React from 'react';
import Footer from '../Footer';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';

describe('Footer', () => {
    it('renders same h1 text in Footer component', async () => {
        renderWithProviders(<Footer />);
        const h1Element = screen.getByText(/BETTER BUYS/i);
        expect(h1Element).toBeInTheDocument();
    });

    it('renders same p text in Footer component', async () => {
        renderWithProviders(<Footer />);
        const pElement = screen.getByText(
            /Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet./i,
        );
        expect(pElement).toBeInTheDocument();
    });

    it('renders same h3 links text in Footer component', async () => {
        renderWithProviders(<Footer />);
        const h3LinksElement = screen.getByText(/Useful Links/i);
        expect(h3LinksElement).toBeInTheDocument();
    });

    it('renders same Home list item text in Footer component', async () => {
        renderWithProviders(<Footer />);
        const homeLiElement = screen.getByText(/Home/i);
        expect(homeLiElement).toBeInTheDocument();
    });

    it('renders same Cart list item text in Footer component', async () => {
        renderWithProviders(<Footer />);
        const cartLiElement = screen.getByText(/Cart/i);
        expect(cartLiElement).toBeInTheDocument();
    });

    it('renders same Phone list item text in Footer component', async () => {
        renderWithProviders(<Footer />);
        const phoneLiElement = screen.getByText(/Phones/i);
        expect(phoneLiElement).toBeInTheDocument();
    });

    it('renders same Accessories list item text in Footer component', async () => {
        renderWithProviders(<Footer />);
        const accessoriesLiElement = screen.getByText(/Accessories/i);
        expect(accessoriesLiElement).toBeInTheDocument();
    });

    it('renders same My Account list item text in Footer component', async () => {
        renderWithProviders(<Footer />);
        const myAccountLiElement = screen.getByText(/My Account/i);
        expect(myAccountLiElement).toBeInTheDocument();
    });

    it('renders same Order Tracking list item text in Footer component', async () => {
        renderWithProviders(<Footer />);
        const orderTrackingLiElement = screen.getByText(/Order Tracking/i);
        expect(orderTrackingLiElement).toBeInTheDocument();
    });

    it('renders same Wishlist list item text in Footer component', async () => {
        renderWithProviders(<Footer />);
        const wishlistLiElement = screen.getByText(/Wishlist/i);
        expect(wishlistLiElement).toBeInTheDocument();
    });

    it('renders same Terms list item text in Footer component', async () => {
        renderWithProviders(<Footer />);
        const termsLiElement = screen.getByText(/Terms/i);
        expect(termsLiElement).toBeInTheDocument();
    });

    it('renders same h3 contacts text in Footer component', async () => {
        renderWithProviders(<Footer />);
        const h1ContactsElement = screen.getByText(/Contact/i);
        expect(h1ContactsElement).toBeInTheDocument();
    });
});
