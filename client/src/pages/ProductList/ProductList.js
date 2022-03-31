import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Promotion from '../../components/Promotion/Promotion';
import Products from '../../components/Products/Products';
import Newsletter from '../../components/Newsletter/Newsletter';
import Footer from '../../components/Footer/Footer';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { mobile } from '../.././responsive';

const ProductListContainer = styled.div``;

const ProductListTitle = styled.h1`
  margin: 20px;
`;

const ProductListFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductListFilter = styled.div`
  margin: 20px;
  ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

const ProductListFilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: '0px' })}
`;

const ProductListSelect = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: '10px 0px' })}
`;
const FilterOption = styled.option``;

const ProductList = () => {
  const [filters, setFilters] = useState({});
  const location = useLocation();
  console.log(location.pathname.split('/')[2]);

  const handleFilters = event => {
    const value = event.target.value;
    setFilters({
      ...filters,
      [event.target.name]: value,
    });
  };
  console.log(filters);
  return (
    <ProductListContainer>
      <Navbar />
      <Promotion />
      <ProductListTitle>Phones</ProductListTitle>
      <ProductListFilterContainer>
        <ProductListFilter>
          <ProductListFilterText>Filter Products:</ProductListFilterText>
          <ProductListSelect name='phone' onChange={handleFilters}>
            <FilterOption disabled selected>
              Phones
            </FilterOption>
            <FilterOption>Apple iPhone 12</FilterOption>
            <FilterOption>Apple iPhone SE</FilterOption>
            <FilterOption>Apple iPhone 13</FilterOption>
            <FilterOption>Apple iPhone 13 Pro</FilterOption>
            <FilterOption>Galaxy Z Flip3 5G</FilterOption>
            <FilterOption>Galaxy A53</FilterOption>
            <FilterOption>Galaxy S22+</FilterOption>
            <FilterOption>Galaxy S22 Ultra</FilterOption>
            <FilterOption>Google Pixel 4a</FilterOption>
            <FilterOption>Google Pixel 3</FilterOption>
            <FilterOption>Google Pixel 5</FilterOption>
            <FilterOption>Google Pixel 3a</FilterOption>
            <FilterOption>Google Pixel 4 XL</FilterOption>
          </ProductListSelect>
          <ProductListSelect name='color' onChange={handleFilters}>
            <FilterOption disabled selected>
              Color
            </FilterOption>
            <FilterOption>Silver</FilterOption>
            <FilterOption>Black</FilterOption>
            <FilterOption>Green</FilterOption>
            <FilterOption>Grey</FilterOption>
            <FilterOption>Gold</FilterOption>
          </ProductListSelect>
        </ProductListFilter>
        <ProductListFilter>
          <ProductListFilterText>Sort Products:</ProductListFilterText>
          <ProductListSelect>
            <FilterOption selected>Newest</FilterOption>
            <FilterOption>Price (asc)</FilterOption>
            <FilterOption>Price (desc)</FilterOption>
          </ProductListSelect>
        </ProductListFilter>
      </ProductListFilterContainer>
      <Products />
      <Newsletter />
      <Footer />
    </ProductListContainer>
  );
};

export default ProductList;
