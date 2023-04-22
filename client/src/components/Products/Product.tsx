import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react';

const ProductInfo = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;

const ProductContainer = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${ProductInfo} {
        opacity: 1;
    }
`;

const ProductCircle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
`;

const ProductImage = styled.img`
    height: 75%;
    z-index: 2;
`;

const ProductIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`;

export interface ProductProps {
    product: {
        _id: any;
        productTitle: string;
        productDescription: string;
        productImage: string;
        productSize: Array<string>;
        productColor: Array<string>;
        productPrice: string;
        productCategories: Array<string>;
    };
}

const Product: React.FC<ProductProps> = ({ product }) => {
    return (
        <ProductContainer role="button" aria-label="product container">
            <ProductCircle aria-hidden />
            <ProductImage src={product.productImage} alt="product image" />
            <ProductInfo>
                <ProductIcon>
                    <ShoppingCartOutlined role="button" name="add to cart" />
                </ProductIcon>
                <ProductIcon>
                    <Link to={`/product/${product._id}`} role="link" aria-label="view product details">
                        <SearchOutlined />
                    </Link>
                </ProductIcon>
                <ProductIcon>
                    <FavoriteBorderOutlined role="button" name="add to favorites" />
                </ProductIcon>
            </ProductInfo>
        </ProductContainer>
    );
};

export default Product;
