import React from 'react';
import Newsletter from '../Newsletter';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderWithProviders } from '../../../utils/test-utils';

describe('<Newsletter />', () => {
    it('renders without crashing', () => {
        renderWithProviders(
            <Router>
                <Newsletter />
            </Router>,
        );
        const title = screen.getByLabelText('Newsletter');
        const description = screen.getByLabelText('newsletter description');
        const emailInput = screen.getByLabelText('Email');
        const subscribeButton = screen.getByLabelText('Subscribe');

        expect(title).toBeInTheDocument();
        expect(description).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(subscribeButton).toBeInTheDocument();
    });
});
