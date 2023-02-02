import React from 'react';
import Navbar from '../Navbar';
import '@testing-library/jest-dom';
// import { render, screen } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';

it('renders same span text in Navbar component', async () => {
    // render(<Navbar />);
    renderWithProviders(<Navbar />);
    const spanElement = screen.getByText(/EN/i);
    expect(spanElement).toBeInTheDocument();
});

// it('renders same h1 text in Navbar component', async () => {
//     render(<Navbar />);
//     const h1Element = screen.getByText(/Better Buys/i);
//     expect(h1Element).toBeInTheDocument();
// });

// it('renders same sign up div text in Navbar component', async () => {
//     render(<Navbar />);
//     const signupElement = screen.getByText(/SIGN UP/i);
//     expect(signupElement).toBeInTheDocument();
// });

// it('renders same sign in div text in Navbar component', async () => {
//     render(<Navbar />);
//     const signinElement = screen.getByText(/SIGN IN/i);
//     expect(signinElement).toBeInTheDocument();
// });
