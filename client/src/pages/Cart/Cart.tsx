import { useState, useEffect } from 'react';
import Promotion from '../../components/Promotion/Promotion';
import Navbar from '../../components/Navbar/Navbar';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
// import { useAppSelector } from '../../hooks';
import { useAppSelector } from '../../hooks/useAppSelector';
// import { useSelector } from 'react-redux';
import { mobile } from '../../responsive';
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../../requestMethods';
import { useNavigate, Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { RootState } from '../../store';
import React from 'react';

const KEY = process.env.REACT_APP_STRIPE;

interface CartSummaryItemProps {
    type?: string;
}

type StripeToken = {
    id: string;
};

const CartContainer = styled.div``;

const CartWrapper = styled.div`
    padding: 20px;
    ${mobile({ padding: '10px' })}
`;

const CartTitle = styled.h1`
    font-weight: 300;
    text-align: center;
`;

const CartTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;

const CartTopButton = styled.button<{ type?: string }>`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border: ${(props) => props.type === 'button' && 'none'};
    background-color: ${(props) => (props.type === 'button' ? 'black' : 'transparent')};
    color: ${(props) => props.type === 'button' && 'white'};
`;

const CartTopTexts = styled.div`
    ${mobile({ display: 'none' })}
`;

const CartTopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0px 10px;
`;

const CartBottom = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
`;

const CartInfo = styled.div`
    flex: 3;
`;

const CartProduct = styled.div`
    display: flex;
    justify-content: space-between;
    ${mobile({ flexDirection: 'column' })}
`;

const CartProductDetail = styled.div`
    flex: 2;
    display: flex;
`;

const CartImage = styled.img`
    width: 200px;
`;

const CartDetails = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

const CartProductName = styled.span``;

const CartProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.color};
`;

const CartProductSize = styled.span``;

const CartPriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const CartProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const CartProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
    ${mobile({ margin: '5px 15px' })}
`;

const CartProductPrice = styled.div`
    font-size: 30px;
    font-weight: 200;
    ${mobile({ marginBottom: '20px' })}
`;

const Hr = styled.hr`
    background-color: #eee;
    border: none;
    height: 1px;
`;

const CartSummary = styled.div`
    flex: 1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;

const CartSummaryTitle = styled.h1`
    font-weight: 200;
`;

const CartSummaryItem = styled.div<CartSummaryItemProps>`
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    font-weight: ${(props) => props.type === 'total' && '500'};
    font-size: ${(props) => props.type === 'total' && '24px'};
`;

const CartSummaryItemText = styled.span``;

const CartSummaryItemPrice = styled.span``;

const CartButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: black;
    color: white;
    font-weight: 600;
`;

const Cart: React.FC = () => {
    const [stripeToken, setStripeToken] = useState<StripeToken | null>(null);
    const cart = useAppSelector((state: RootState) => state.cart);
    const navigate = useNavigate();

    const onToken = (token: any) => {
        setStripeToken(token);
    };
    console.log(stripeToken);

    useEffect(() => {
        const makeRequest = async () => {
            try {
                const res = await userRequest.post('/checkout/payment', {
                    tokenId: stripeToken!.id,
                    amount: cart.total * 100,
                });
                console.log(res.data);
                navigate('/success', {
                    state: res.data,
                    products: cart,
                });
            } catch (err) {
                console.log(err);
            }
        };
        stripeToken && makeRequest(); // only make request when token is available
    }, [stripeToken, cart, navigate]);

    return (
        <CartContainer>
            <Navbar />
            <Promotion />
            <CartWrapper>
                <CartTitle>YOUR BAG</CartTitle>
                <CartTop>
                    <Link to="/">
                        <CartTopButton>CONTINUE SHOPPING</CartTopButton>
                    </Link>
                    <CartTopTexts>
                        <CartTopText>Shopping Bag(0)</CartTopText>
                        <CartTopText>Your Wishlist (0)</CartTopText>
                    </CartTopTexts>
                    <CartTopButton type="filled">APPLY COUPON</CartTopButton>
                </CartTop>
                <CartBottom>
                    <CartInfo>
                        {cart.products.map((product) => (
                            <CartProduct key={uuidv4()}>
                                <CartProductDetail>
                                    <CartImage src={product.productImage} />
                                    <CartDetails>
                                        <CartProductName>
                                            <b>Product:</b> {product.productTitle}
                                        </CartProductName>
                                        <CartProductColor
                                            color={typeof product.productColor === 'string' ? product.productColor : ''}
                                        />
                                        <CartProductSize>
                                            <b>Size:</b> {product.productSize}
                                        </CartProductSize>
                                    </CartDetails>
                                </CartProductDetail>
                                <CartPriceDetail>
                                    <CartProductAmountContainer>
                                        <Remove />
                                        <CartProductAmount>{product.productQuantity}</CartProductAmount>
                                        <Add />
                                    </CartProductAmountContainer>
                                    <CartProductPrice>
                                        $ {Number(product.productPrice) * product.productQuantity}
                                    </CartProductPrice>
                                </CartPriceDetail>
                            </CartProduct>
                        ))}
                        <Hr />
                    </CartInfo>
                    <CartSummary>
                        <CartSummaryTitle>ORDER SUMMARY</CartSummaryTitle>
                        <CartSummaryItem>
                            <CartSummaryItemText>Subtotal</CartSummaryItemText>
                            <CartSummaryItemPrice>$ {cart.total}</CartSummaryItemPrice>
                        </CartSummaryItem>
                        <CartSummaryItem>
                            <CartSummaryItemText>Estimated Shipping</CartSummaryItemText>
                            <CartSummaryItemPrice>$ 5.90</CartSummaryItemPrice>
                        </CartSummaryItem>
                        <CartSummaryItem>
                            <CartSummaryItemText>Shipping Discount</CartSummaryItemText>
                            <CartSummaryItemPrice>$ -5.90</CartSummaryItemPrice>
                        </CartSummaryItem>
                        <CartSummaryItem type="total">
                            <CartSummaryItemText>Total</CartSummaryItemText>
                            <CartSummaryItemPrice>$ {cart.total}</CartSummaryItemPrice>
                        </CartSummaryItem>
                        <StripeCheckout
                            name="Better Buys"
                            image="https://i.ibb.co/TRR3Ggn/cellphonecartoon.png"
                            billingAddress
                            shippingAddress
                            description={`Your total is $${cart.total}`}
                            amount={cart.total * 100}
                            token={onToken}
                            stripeKey={KEY}
                        >
                            <CartButton>CHECKOUT NOW</CartButton>
                        </StripeCheckout>
                    </CartSummary>
                </CartBottom>
            </CartWrapper>
        </CartContainer>
    );
};

export default Cart;
