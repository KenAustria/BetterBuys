import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';

interface Product {
    price: any;
    productQuantity: any;
    productTitle: string;
    productDescription: string;
    productImage: string;
    productSize: Array<string>;
    productColor: Array<string>;
    productPrice: string;
    productCategories: Array<string>;
}

interface CartState {
    products: Product[];
    cartQuantity: number;
    total: number;
}

const initialState: CartState = {
    products: [],
    cartQuantity: 0,
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
            state.cartQuantity += 1;
            state.products.push(action.payload); // payload is the added product
            state.total +=
                action.payload.price * action.payload.productQuantity; /* refers to product obj in ProductProfile */
        },
    },
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
