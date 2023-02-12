import { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Promotion from '../../components/Promotion/Promotion';
import FilterProducts from './FilterProducts';
import SortProducts from './SortProducts';
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

export const ProductListFilter = styled.div`
    margin: 20px;
    ${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

export const ProductListFilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: '0px', fontSize: '18px' })}
`;

export const ProductListSelect = styled.select`
    padding: 10px;
    margin-right: 20px;
    ${mobile({ margin: '10px 0px' })}
`;

export const FilterOption = styled.option``;

export type Filters = {
    productTitle: string;
    productColor: Array<string>;
};

const ProductList: React.FC = () => {
    const [filters, setFilters] = useState<Filters>({});
    const [sort, setSort] = useState<string>('newest');
    const location = useLocation();
    const category = location.pathname.split('/')[2];

    const handleFilters = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setFilters({
            ...filters,
            [event.target.name]: value,
        });
        console.log(filters);
    };

    return (
        <ProductListContainer>
            <Navbar />
            <Promotion />
            <ProductListTitle role="heading" aria-level="1">
                {category}
            </ProductListTitle>
            <ProductListFilterContainer>
                <FilterProducts handleFilters={handleFilters} />
                <SortProducts setSort={setSort} />
            </ProductListFilterContainer>
            <Products category={category} filters={filters} sort={sort} />
        </ProductListContainer>
    );
};

export default ProductList;
