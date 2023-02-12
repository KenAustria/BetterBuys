import styled from 'styled-components';
import { RootState } from '../../store';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import { userRequest } from '../../requestMethods';
import React, { useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks/useAppSelector';

const SuccessContainer = styled.div`
    height: '100vh';
    display: 'flex';
    flex-direction: 'column';
    align-items: 'center';
    justify-content: 'center';
`;

const SuccessButton = styled.div`
    padding: 10;
    margin-top: 20;
`;

const Success: React.FC = () => {
    const location = useLocation();
    const data = location.state;
    // const cart = location.state.amount;
    const cart = location.state && location.state.amount ? location.state.amount : 0;
    const currentUser = useAppSelector((state: RootState) => state.user.currentUser);
    const [orderId, setOrderId] = useState<number | null>(null);

    useEffect(() => {
        const createOrder = async () => {
            try {
                const res = await userRequest.post('/orders', {
                    userId: currentUser._id,
                    products: cart.products.map((item) => ({
                        productId: item._id,
                        quantity: item._quantity,
                    })),
                    amount: cart.total,
                    address: data.billing_details.address,
                });
                setOrderId(res.data._id);
            } catch {}
        };
        data && createOrder();
    }, [cart, data, currentUser]);

    return (
        <SuccessContainer>
            {orderId
                ? `Order has been created successfully. Your order number is ${orderId}`
                : `Successfull. Your order is being prepared...`}
            <Link to="/" style={{ textDecoration: 'none' }}>
                <SuccessButton aria-label="Go to Homepage">Go to Homepage</SuccessButton>
            </Link>
        </SuccessContainer>
    );
};

export default Success;
