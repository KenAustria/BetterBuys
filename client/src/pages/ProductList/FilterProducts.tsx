import React from 'react';
import { ProductListFilter, ProductListFilterText, ProductListSelect, FilterOption } from './ProductList';

interface Props {
    handleFilters: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const FilterProducts: React.FC<Props> = ({ handleFilters }) => {
    return (
        <ProductListFilter>
            <ProductListFilterText htmlFor="productCategories">Filter Products:</ProductListFilterText>
            <ProductListSelect
                id="productCategories"
                name="productCategories"
                onChange={handleFilters}
                aria-label="Filter products"
            >
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
    );
};

export default FilterProducts;
