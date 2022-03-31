import Promotion from '../../components/Promotion/Promotion';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Newsletter from '../../components/Newsletter/Newsletter';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { mobile } from '../../responsive';

const ProductProfileContainer = styled.div``;

const ProductProfileWrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;

const ProductImageContainer = styled.div`
  flex: 1;
`;

const ProductImage = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: '40vh' })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`;

const ProductTitle = styled.h1`
  font-weight: 200;
`;

const ProductDescription = styled.p`
  margin: 20px 0px;
`;

const ProductPrice = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const ProductFilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;

const ProductFilter = styled.div`
  display: flex;
  align-items: center;
`;

const ProductFilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const ProductFilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const ProductFilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const ProductFilterSizeOption = styled.option``;

const ProductAddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: '100%' })}
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const ProductAmount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const AddToCartButton = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <ProductProfileContainer>
      <Navbar />
      <Promotion />
      <ProductProfileWrapper>
        <ProductImageContainer>
          <ProductImage src='https://ibb.co/bmGcSPJ' />
        </ProductImageContainer>
        <InfoContainer>
          <ProductTitle>Apple iPhone 13</ProductTitle>
          <ProductDescription>
            Space, the final frontier. These are the voyages of the Starship
            Enterprise. Its five-year mission: to explore strange new worlds, to
            seek out new life and new civilizations, to boldly go where no man
            has gone before. Many say exploration is part of our destiny, but it
            is actually our duty to future generations and their quest to ensure
            the survival of the human species.
          </ProductDescription>
          <ProductPrice>$1200</ProductPrice>
          <ProductFilterContainer>
            <ProductFilter>
              <ProductFilterTitle>Color</ProductFilterTitle>
              <ProductFilterColor color='silver' />
              <ProductFilterColor color='green' />
              <ProductFilterColor color='gold' />
              <ProductFilterColor color='black' />
            </ProductFilter>
            <ProductFilter>
              <ProductFilterTitle>Size</ProductFilterTitle>
              <ProductFilterSize>
                <ProductFilterSizeOption>Standard</ProductFilterSizeOption>
                <ProductFilterSizeOption>Mini</ProductFilterSizeOption>
              </ProductFilterSize>
            </ProductFilter>
          </ProductFilterContainer>
          <ProductAddContainer>
            <ProductAmountContainer>
              <Remove />
              <ProductAmount>1</ProductAmount>
              <Add />
            </ProductAmountContainer>
            <AddToCartButton>ADD TO CART</AddToCartButton>
          </ProductAddContainer>
        </InfoContainer>
      </ProductProfileWrapper>
      <Newsletter />
      <Footer />
    </ProductProfileContainer>
  );
};

export default Product;
