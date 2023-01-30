import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Promotion from '../../components/Promotion/Promotion';
import Products from '../../components/Products/Products';
import styled from 'styled-components';
import { useLocation } from 'react-router';
import { mobile } from '../../responsive';
import React from 'react';

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
    ${mobile({ marginRight: '0px', fontSize: '18px' })}
`;

const ProductListSelect = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: '10px 0px' })}
`;
const FilterOption = styled.option``;

type Filters = {
    productTitle: string;
    productColor: Array<string>;
};

const ProductList: React.FC = () => {
    const [filters, setFilters] = useState<Filters>({});
    const [sort, setSort] = useState<string>('newest');
    const location = useLocation();
    const category = location.pathname.split('/')[2]; // iphone, galaxy, pixel

    // create object and change values inside object
    const handleFilters = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setFilters({
            ...filters, // to update both phone and color filters
            [event.target.name]: value,
        });
        console.log(filters);
    };

    return (
        <ProductListContainer>
            <Navbar />
            <Promotion />
            <ProductListTitle>{category}</ProductListTitle>
            <ProductListFilterContainer>
                <ProductListFilter>
                    <ProductListFilterText>Filter Products:</ProductListFilterText>
                    <ProductListSelect name="productCategories" onChange={handleFilters}>
                        <FilterOption value="" defaultValue>
                            Phones
                        </FilterOption>
                        <FilterOption>Apple iPhone 13</FilterOption>
                        <FilterOption>Apple iPhone 13 Mini</FilterOption>
                        <FilterOption>Apple iPhone 13 Pro</FilterOption>
                        <FilterOption>Apple iPhone 13 Max</FilterOption>
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
                </ProductListFilter>
                <ProductListFilter>
                    <ProductListFilterText>Sort Products:</ProductListFilterText>
                    <ProductListSelect onChange={(event) => setSort(event.target.value)}>
                        <FilterOption value="newest" defaultValue>
                            Newest
                        </FilterOption>
                        <FilterOption value="asc">Price (asc)</FilterOption>
                        <FilterOption value="desc">Price (desc)</FilterOption>
                    </ProductListSelect>
                </ProductListFilter>
            </ProductListFilterContainer>
            <Products category={category} filters={filters} sort={sort} />
        </ProductListContainer>
    );
};

export default ProductList;
