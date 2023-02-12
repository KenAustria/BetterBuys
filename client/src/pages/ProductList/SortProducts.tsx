import React from 'react';
import { ProductListFilter, ProductListFilterText, ProductListSelect, FilterOption } from './ProductList';

interface Props {
    setSort: (sortValue: string) => void;
}

const SortProducts: React.FC<Props> = ({ setSort }) => {
    return (
        <ProductListFilter>
            <ProductListFilterText htmlFor="sort-select">Sort Products:</ProductListFilterText>
            <ProductListSelect id="sort-select" onChange={(event) => setSort(event.target.value)}>
                <FilterOption value="newest" defaultValue>
                    Newest
                </FilterOption>
                <FilterOption value="asc">Price (asc)</FilterOption>
                <FilterOption value="desc">Price (desc)</FilterOption>
            </ProductListSelect>
        </ProductListFilter>
    );
};

export default SortProducts;
