import { useEffect, useState } from 'react';
import Product from './Product';
import { trendingProducts } from '../../data';
import styled from 'styled-components';
import axios from 'axios';

const ProductsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          category
            ? `http://localhost:9000/api/products?category=${category}`
            : `http://localhost:9000/api/products`
        );
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, [category]);

  return (
    <ProductsContainer>
      {trendingProducts.map(trendingProduct => (
        <Product key={trendingProduct.id} trendingProduct={trendingProduct} />
      ))}
    </ProductsContainer>
  );
};

export default Products;
