import React from 'react';
import Promotion from '../Promotion';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

test('renders container', async () => {
    render(<Promotion />);
    const containerElement = screen.getByText(/Flash Sale! Flash Sale! Flash Sale!/i);
    expect(containerElement).toBeInTheDocument();
});
