import { useEffect, useState } from 'react';
import axios from 'axios';

export type ProductObj = {
    productTitle: string;
    productDescription: string;
    productImage: string;
    productSize: Array<string>;
    productColor: Array<string>;
    productPrice: string;
    productCategories: Array<string>;
};

export const useFetchProducts = (category: string) => {
    const [products, setProducts] = useState<ProductObj[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await axios.get(
                    /* fetch products either filtered by category or all products
                  if the category is not specified */
                    category
                        ? `http://localhost:9000/api/products?category=${category}`
                        : `http://localhost:9000/api/products`,
                );
                setProducts(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, [category]);

    return products;
};
