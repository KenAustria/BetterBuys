import React from 'react';
import Success from '../Success';
import '@testing-library/jest-dom';
import { screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderWithProviders } from '../../../utils/test-utils';

afterEach(cleanup);

describe('Success', () => {
    // it('should display order number when orderId is not null', () => {
    //     const { getByText } = renderWithProviders(
    //         <Router>
    //             <Success orderId={1} />
    //         </Router>,
    //     );
    //     const orderText = screen.getByText('Order has been created successfully. Your order number is 1');
    //     expect(orderText).toBeInTheDocument();
    // });

    it('should display loading text when orderId is null', () => {
        const { getByText } = renderWithProviders(
            <Router>
                <Success orderId={null} />
            </Router>,
        );
        const orderText = screen.getByText('Successfull. Your order is being prepared...');
        expect(orderText).toBeInTheDocument();
    });
});
