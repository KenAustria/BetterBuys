import React, { useEffect, useState } from 'react';
import Product from './Product';
import styled from 'styled-components';
import { mobile } from '../../responsive';
import { v4 as uuidv4 } from 'uuid';
import { useFetchProducts } from '../../hooks/useFetchProducts';

const ProductsContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    ${mobile({ padding: '0px' })}
`;

interface ProductsProps {
    category: string;
    filters: {
        productTitle: string;
        productColor: Array<string>;
    };
    sort: string;
}

type FilteredProduct = {
    productTitle: string;
    productDescription: string;
    productImage: string;
    productSize: Array<string>;
    productColor: Array<string>;
    productPrice: string;
    productCategories: Array<string>;
};

const Products: React.FC<ProductsProps> = ({ category, filters, sort }) => {
    console.log(category, filters, sort);
    // const [products, setProducts] = useState<ProductObj[]>([]);
    const products = useFetchProducts(category);
    const [filteredProducts, setFilteredProducts] = useState<FilteredProduct[]>([]);

    // if category is chosen, set products of chosen category
    useEffect(() => {
        const filterProducts = () => {
            if (!category) return;
            setFilteredProducts(
                products.filter((product) =>
                    Object.entries(filters).every(([key, value]) => product[key].includes(value)),
                ),
            );
        };
        filterProducts();
    }, [products, category, filters]);

    // filter products by price
    useEffect(() => {
        const sortProducts = (sortType: 'newest' | 'asc' | 'desc') => {
            switch (sortType) {
                case 'newest':
                    return [...filteredProducts].sort((a, b) => a.createdAt - b.createdAt);
                case 'asc':
                    return [...filteredProducts].sort((a, b) => a.productPrice - b.productPrice);
                case 'desc':
                    return [...filteredProducts].sort((a, b) => b.productPrice - a.productPrice);
                default:
                    return filteredProducts;
            }
        };
        setFilteredProducts(sortProducts(sort));
    }, [sort]);

    /* display filtered products if a category is chosen
	otherwise, display a maximum of 4 products from products array */
    return (
        <ProductsContainer>
            {category
                ? filteredProducts.map((product) => <Product key={uuidv4()} product={product} />)
                : products.slice(0, 4).map((product) => <Product key={uuidv4()} product={product} />)}
        </ProductsContainer>
    );
};

export default Products;
