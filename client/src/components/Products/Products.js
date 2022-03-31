import Product from './Product';
import { trendingProducts } from '../../data';
import styled from 'styled-components';

const ProductsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = () => {
  return (
    <ProductsContainer>
      {trendingProducts.map(trendingProduct => (
        <Product key={trendingProduct.id} trendingProduct={trendingProduct} />
      ))}
    </ProductsContainer>
  );
};

export default Products;
