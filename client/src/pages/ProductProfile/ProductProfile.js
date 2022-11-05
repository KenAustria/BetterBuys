import { useEffect, useState } from 'react';
import Promotion from '../../components/Promotion/Promotion';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';
import Newsletter from '../../components/Newsletter/Newsletter';
import styled from 'styled-components';
import { Add, Remove } from '@material-ui/icons';
import { useLocation } from 'react-router-dom';
import { addProduct } from '../../features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { publicRequest } from '../../requestMethods';
import { mobile } from '../../responsive';

const ProductProfileContainer = styled.div``;

const ProductProfileWrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: '10px', flexDirection: 'column' })}
`;

const ProductImageContainer = styled.div`
  flex: 1;
`;

const ProductImage = styled.img`
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

const ProductTitle = styled.h1`
  font-weight: 200;
`;

const ProductDescription = styled.p`
  margin: 20px 0px;
`;

const ProductPrice = styled.span`
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

const ProductFilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const ProductFilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
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

const AddToCartButton = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover {
    background-color: #f8f4f4;
  }
`;

const ProductProfile = () => {
	const [product, setProduct] = useState({});
	const [productQuantity, setProductQuantity] = useState(1);
	const [color, setColor] = useState('');
	const [size, setSize] = useState('');
	const location = useLocation();
	const id = location.pathname.split('/')[2];
	const dispatch = useDispatch();

	useEffect(() => {
		const getProduct = async () => {
			try {
				const res = await publicRequest.get('/products/find/' + id);
				setProduct(res.data);
			} catch { }
		};
		getProduct();
	}, [id]);

	// prevent negative quantity, only decrease quantity if greater than 1
	const handleProductQuantity = type => {
		if (type === 'decrease') {
			productQuantity > 1 && setProductQuantity(productQuantity - 1);
		} else {
			setProductQuantity(productQuantity + 1);
		}
	};

	const handleAddToCart = () => {
		dispatch(
			addProduct({
				...product,
				productQuantity,
				color,
				size,
				price: product.productPrice * productQuantity,
			})
		);
	};

	return (
		<ProductProfileContainer>
			<Navbar />
			<Promotion />
			<ProductProfileWrapper>
				<ProductImageContainer>
					<ProductImage src={product.productImage} />
				</ProductImageContainer>
				<InfoContainer>
					<ProductTitle>{product.productTitle}</ProductTitle>
					<ProductDescription>{product.productDescription}</ProductDescription>
					<ProductPrice>${product.productPrice}</ProductPrice>
					<ProductFilterContainer>
						<ProductFilter>
							<ProductFilterTitle>Color</ProductFilterTitle>
							{product.productColor?.map(productColor => (
								<ProductFilterColor
									key={productColor}
									color={productColor}
									onClick={() => setColor(productColor)}
								/>
							))}
						</ProductFilter>
						<ProductFilter>
							<ProductFilterTitle>Size</ProductFilterTitle>
							<ProductFilterSize
								onChange={event => setSize(event.target.value)}>
								{product.productSize?.map(productSize => (
									<ProductFilterSizeOption key={productSize}>
										{productSize}
									</ProductFilterSizeOption>
								))}
							</ProductFilterSize>
						</ProductFilter>
					</ProductFilterContainer>
					<ProductAddContainer>
						<ProductAmountContainer>
							<Remove onClick={() => handleProductQuantity('decrease')} />
							<ProductAmount>{productQuantity}</ProductAmount>
							<Add onClick={() => handleProductQuantity('increase')} />
						</ProductAmountContainer>
						<AddToCartButton onClick={handleAddToCart}>
							ADD TO CART
						</AddToCartButton>
					</ProductAddContainer>
				</InfoContainer>
			</ProductProfileWrapper>
			<Newsletter />
			<Footer />
		</ProductProfileContainer>
	);
};

export default ProductProfile;
