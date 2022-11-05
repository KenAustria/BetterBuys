import { useEffect, useState } from 'react';
import Product from './Product';
import styled from 'styled-components';
import axios from 'axios';

const ProductsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ category, filters, sort }) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	// fetch all products if a category isn't chosen
	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get(
					category
						? `http://localhost:9000/api/products?category=${category}`
						: `http://localhost:9000/api/products`
				);
				setProducts(res.data);
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, [category]);

	// if category is chosen, set products of chosen category
	useEffect(() => {
		category &&
			setFilteredProducts(
				products.filter(product =>
					Object.entries(filters).every(([key, value]) =>
						product[key].includes(value)
					)
				)
			);
	}, [products, category, filters]);

	// filter products by price
	useEffect(() => {
		if (sort === 'newest') {
			setFilteredProducts(prev =>
				[...prev].sort((a, b) => a.createdAt - b.createdAt)
			);
		} else if (sort === 'asc') {
			setFilteredProducts(prev => [...prev].sort((a, b) => a.price - b.price));
		} else {
			setFilteredProducts(prev => [...prev].sort((a, b) => b.price - a.price));
		}
	}, [sort]);

	/* display filtered products if a category is chosen
	otherwise, display a maximum of 8 products from products array */
	return (
		<ProductsContainer>
			{category
				? filteredProducts.map(product => (
					<Product key={product.id} product={product} />
				))
				: products
					.slice(0, 8)
					.map(product => <Product key={product.id} product={product} />)}
		</ProductsContainer>
	);
};

export default Products;
