import React from 'react';
import Promotion from '../Promotion';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../../utils/test-utils';

describe('Promotion', () => {
    it('renders same text in div container of Promotion component', async () => {
        renderWithProviders(<Promotion />);
        const containerElement = screen.getByText(/Flash Sale! Flash Sale! Flash Sale!/i);
        expect(containerElement).toBeInTheDocument();
    });
});
