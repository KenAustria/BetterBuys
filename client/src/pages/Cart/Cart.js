import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../../responsive';

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

const CartTopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === 'filled' && 'none'};
  background-color: ${props =>
    props.type === 'filled' ? 'black' : 'transparent'};
  color: ${props => props.type === 'filled' && 'white'};
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

const CartProductId = styled.span``;

const CartProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
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

const CartSummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === 'total' && '500'};
  font-size: ${props => props.type === 'total' && '24px'};
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

const Cart = () => {
  return (
    <CartContainer>
      <Navbar />
      <Announcement />
      <CartWrapper>
        <CartTitle>YOUR BAG</CartTitle>
        <CartTop>
          <CartTopButton>CONTINUE SHOPPING</CartTopButton>
          <CartTopTexts>
            <CartTopText>Shopping Bag(2)</CartTopText>
            <CartTopText>Your Wishlist (0)</CartTopText>
          </CartTopTexts>
          <CartTopButton type='filled'>CHECKOUT NOW</CartTopButton>
        </CartTop>
        <CartBottom>
          <CartInfo>
            <CartProduct>
              <CartProductDetail>
                <CartImage src='https://ibb.co/zPL2ynn' />
                <CartDetails>
                  <CartProductName>
                    <b>Product:</b> IPHONE 13
                  </CartProductName>
                  <CartProductId>
                    <b>ID:</b> 9635987109832
                  </CartProductId>
                  <CartProductColor color='blue' />
                  <CartProductSize>
                    <b>Size:</b> Regular
                  </CartProductSize>
                </CartDetails>
              </CartProductDetail>
              <CartPriceDetail>
                <CartProductAmountContainer>
                  <Add />
                  <CartProductAmount>2</CartProductAmount>
                  <Remove />
                </CartProductAmountContainer>
                <CartProductPrice>$ 1299</CartProductPrice>
              </CartPriceDetail>
            </CartProduct>
            <Hr />
            <CartProduct>
              <CartProductDetail>
                <CartImage src='https://ibb.co/zP4DYPM' />
                <CartDetails>
                  <CartProductName>
                    <b>Product:</b> IPHONE 13 MINI
                  </CartProductName>
                  <CartProductId>
                    <b>ID:</b> 1953903483982
                  </CartProductId>
                  <CartProductColor color='gray' />
                  <CartProductSize>
                    <b>Size:</b> MINI
                  </CartProductSize>
                </CartDetails>
              </CartProductDetail>
              <CartPriceDetail>
                <CartProductAmountContainer>
                  <Add />
                  <CartProductAmount>1</CartProductAmount>
                  <Remove />
                </CartProductAmountContainer>
                <CartProductPrice>$ 999</CartProductPrice>
              </CartPriceDetail>
            </CartProduct>
          </CartInfo>
          <CartSummary>
            <CartSummaryTitle>ORDER SUMMARY</CartSummaryTitle>
            <CartSummaryItem>
              <CartSummaryItemText>Subtotal</CartSummaryItemText>
              <CartSummaryItemPrice>$ 3597</CartSummaryItemPrice>
            </CartSummaryItem>
            <CartSummaryItem>
              <CartSummaryItemText>Estimated Shipping</CartSummaryItemText>
              <CartSummaryItemPrice>$ 5.90</CartSummaryItemPrice>
            </CartSummaryItem>
            <CartSummaryItem>
              <CartSummaryItemText>Shipping Discount</CartSummaryItemText>
              <CartSummaryItemPrice>$ -5.90</CartSummaryItemPrice>
            </CartSummaryItem>
            <CartSummaryItem type='total'>
              <CartSummaryItemText>Total</CartSummaryItemText>
              <CartSummaryItemPrice>$ 3597</CartSummaryItemPrice>
            </CartSummaryItem>
            <CartButton>CHECKOUT NOW</CartButton>
          </CartSummary>
        </CartBottom>
      </CartWrapper>
      <Footer />
    </CartContainer>
  );
};

export default Cart;
