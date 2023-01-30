import { useState, useEffect } from 'react';
import { useAppSelector } from '../../hooks';
// import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { userRequest } from '../../requestMethods';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import React from 'react';

const Success: React.FC = () => {
    const location = useLocation();
    const data = location.state;
    const cart = location.state.amount;
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
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            {orderId
                ? `Order has been created successfully. Your order number is ${orderId}`
                : `Successfull. Your order is being prepared...`}
            <Link to="/" style={{ textDecoration: 'none' }}>
                <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
            </Link>
        </div>
    );
};

export default Success;
