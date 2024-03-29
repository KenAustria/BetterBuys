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

interface ProductObj {
    _id: any;
    productTitle: string;
    productDescription: string;
    productImage: string;
    productSize: Array<string>;
    productColor: Array<string>;
    productPrice: string;
    productCategories: Array<string>;
    createdAt?: number;
}

type FilteredProduct = ProductObj & {
    _id: any;
    productTitle: string;
    productDescription: string;
    productImage: string;
    productSize: Array<string>;
    productColor: Array<string>;
    productPrice: string;
    productCategories: Array<string>;
    createdAt?: number;
};

const Products: React.FC<ProductsProps> = ({ category, filters, sort }) => {
    console.log(category, filters, sort);
    // const [products, setProducts] = useState<ProductObj[]>([]);
    const products = useFetchProducts(category);
    const [filteredProducts, setFilteredProducts] = useState<FilteredProduct[]>([]);

    const product = {
        _id: 'product-1',
        productTitle: 'Product 1',
        productDescription: 'This is the description for Product 1',
        productImage: 'https://example.com/product-1.jpg',
        productSize: ['Small', 'Medium', 'Large'],
        productColor: ['Red', 'Green', 'Blue'],
        productPrice: '10.00',
        productCategories: ['Category A', 'Category B'],
    };

    // if category is chosen, set products of chosen category
    useEffect(() => {
        const filterProducts = () => {
            if (!category) return;
            setFilteredProducts(
                products
                    .map((product) => ({
                        ...product,
                        _id: product._id || uuidv4(),
                    }))
                    .filter((product) => {
                        if (filters.productTitle && !product.productTitle.includes(filters.productTitle)) {
                            return false;
                        }
                        if (
                            filters.productColor &&
                            !filters.productColor.every((color) => product.productColor.includes(color))
                        ) {
                            return false;
                        }
                        return true;
                    }),
            );
        };
        filterProducts();
    }, [products, category, filters]);

    // filter products by price
    useEffect(() => {
        const sortProducts = (sortType: 'newest' | 'asc' | 'desc') => {
            switch (sortType) {
                case 'newest':
                    return [...filteredProducts].sort((a, b) => {
                        if (a.createdAt && b.createdAt) {
                            return a.createdAt - b.createdAt;
                        } else if (a.createdAt) {
                            return -1;
                        } else {
                            return 1;
                        }
                    });
                case 'asc':
                    return [...filteredProducts].sort((a, b) => Number(a.productPrice) - Number(b.productPrice));
                case 'desc':
                    return [...filteredProducts].sort((a, b) => Number(b.productPrice) - Number(a.productPrice));
                default:
                    return filteredProducts;
            }
        };
        if (sort === 'newest' || sort === 'asc' || sort === 'desc') {
            setFilteredProducts(sortProducts(sort));
        }
    }, [sort]);

    /* display filtered products if a category is chosen
	otherwise, display a maximum of 4 products from products array */
    return (
        <ProductsContainer>
            {category
                ? filteredProducts.map((product) => <Product key={product._id} product={product} />)
                : products.slice(0, 4).map((product) => <Product key={product._id} product={product} />)}
        </ProductsContainer>
    );
};

export default Products;
