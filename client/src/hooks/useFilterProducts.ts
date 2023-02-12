import { useState, useEffect, useMemo } from 'react';
import { ProductObj } from './useFetchProducts';
// import { useFetchProducts } from './useFetchProducts';

interface ProductsProps {
    category: {
        id: number;
        img: string;
        title: string;
        category: string;
    };
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

// export const useFilterProducts = (props: ProductsProps) => {
export const useFilterProducts = (products: ProductObj[], category: string, filters: object) => {
    // const { category, filters, sort } = props;
    const [filteredProducts, setFilteredProducts] = useState<FilteredProduct[]>([]);

    // const products = useFetchProducts(category);

    useEffect(() => {
        let isMounted = true;
        const filterProducts = () => {
            if (!category) return;
            if (isMounted) {
                setFilteredProducts(
                    products.filter((product) =>
                        Object.entries(filters).every(([key, value]) => product[key].includes(value)),
                    ),
                );
            }
        };
        filterProducts();
        return () => {
            isMounted = false;
        };
    }, [products, category, filters]);

    return useMemo(() => filteredProducts, [filteredProducts]);
};
