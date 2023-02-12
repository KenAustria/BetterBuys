import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { mobile } from '../../responsive';
import { useLocation } from 'react-router-dom';
import { Add, Remove } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { publicRequest } from '../../requestMethods';
import { addProduct } from '../../features/cart/cartSlice';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import Promotion from '../../components/Promotion/Promotion';

const ProductProfileContainer = styled.div``;

const ProductProfileWrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({ padding: '10px', flexDirection: 'column' })}
`;

const ProductImageContainer = styled.div`
    flex: 1;
`;

export const ProductImage = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({ height: '40vh' })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;
    ${mobile({ padding: '10px' })}
`;

export const ProductTitle = styled.h1`
    font-weight: 200;
`;

export const ProductDescription = styled.p`
    margin: 20px 0px;
`;

export const ProductPrice = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const ProductFilterContainer = styled.div`
    width: 50%;
    margin: 30px 0px;
    display: flex;
    justify-content: space-between;
    ${mobile({ width: '100%' })}
`;

const ProductFilter = styled.div`
    display: flex;
    align-items: center;
`;

export const ProductFilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;

const ProductFilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${(props) => props.productColor};
    margin: 0px 5px;
    cursor: pointer;
`;

const ProductFilterSize = styled.select`
    margin-left: 10px;
    padding: 5px;
`;

const ProductFilterSizeOption = styled.option``;

const ProductAddContainer = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ width: '100%' })}
`;

const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 700;
`;

const ProductAmount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0px 5px;
`;

export const AddToCartButton = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover {
        background-color: #f8f4f4;
    }
`;

type Product = {
    productTitle: string;
    productDescription: string;
    productImage: string;
    productSize: Array<string>;
    productColor: Array<string>;
    productPrice: string;
    productCategories: Array<string>;
};

const ProductProfile: React.FC = () => {
    const [product, setProduct] = useState<Product>({});
    const [productQuantity, setProductQuantity] = useState<number>(1);
    const [productColor, setProductColor] = useState<string | false>('');
    const [productSize, setProductSize] = useState<string | false>('');
    const location = useLocation();
    const id = location.pathname.split('/')[2];
    const dispatch = useAppDispatch();

    // no need to be user to fetch product
    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get('/products/find/' + id);
                setProduct(res.data);
            } catch {}
        };
        getProduct();
    }, [id]);

    // prevent negative quantity, only decrease quantity if greater than 1
    const handleProductQuantity = (type) => {
        if (type === 'decrease') {
            productQuantity > 1 && setProductQuantity(productQuantity - 1);
        } else {
            setProductQuantity(productQuantity + 1);
        }
    };

    // using Redux for updating Cart from ProductProfile for instant transition
    const handleAddToCart = () => {
        dispatch(
            addProduct({
                ...product,
                productQuantity,
                productColor,
                productSize,
                price: product.productPrice * productQuantity,
            }),
        );
    };

    return (
        <ProductProfileContainer>
            <Navbar />
            <Promotion />
            <ProductProfileWrapper>
                <ProductImageContainer>
                    <ProductImage src={product.productImage} alt="product image" />
                </ProductImageContainer>
                <InfoContainer>
                    <ProductTitle aria-label="product title">{product.productTitle}</ProductTitle>
                    <ProductDescription aria-label="product description">
                        {product.productDescription}
                    </ProductDescription>
                    <ProductPrice aria-label="product price">${product.productPrice}</ProductPrice>
                    <ProductFilterContainer>
                        <ProductFilter>
                            <ProductFilterTitle aria-label="color filter">Color</ProductFilterTitle>
                            {/* ? to prevent undefined map TypeError*/}
                            {product.productColor?.map((productColor) => (
                                <ProductFilterColor
                                    key={uuidv4()}
                                    productColor={productColor}
                                    onClick={() => setProductColor(productColor)}
                                />
                            ))}
                        </ProductFilter>
                        <ProductFilter>
                            <ProductFilterTitle aria-label="size filter">Size</ProductFilterTitle>
                            <ProductFilterSize
                                onChange={(event: React.ChangeEvent<HTMLSelectElement>) =>
                                    setProductSize(event.target.value)
                                }
                            >
                                {product.productSize?.map((productSize) => (
                                    <ProductFilterSizeOption key={uuidv4()}>{productSize}</ProductFilterSizeOption>
                                ))}
                            </ProductFilterSize>
                        </ProductFilter>
                    </ProductFilterContainer>
                    <ProductAddContainer>
                        <ProductAmountContainer>
                            {/* type parameter for fn */}
                            <Remove
                                role="button"
                                aria-label="remove"
                                onClick={() => handleProductQuantity('decrease')}
                            />
                            <ProductAmount>{productQuantity}</ProductAmount>
                            <Add role="button" aria-label="add" onClick={() => handleProductQuantity('increase')} />
                        </ProductAmountContainer>
                        <AddToCartButton role="button" aria-label="add to cart" onClick={handleAddToCart}>
                            ADD TO CART
                        </AddToCartButton>
                    </ProductAddContainer>
                </InfoContainer>
            </ProductProfileWrapper>
        </ProductProfileContainer>
    );
};

export default ProductProfile;
