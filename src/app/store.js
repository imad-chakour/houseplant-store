import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import productsReducer from '../features/cart/productsSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  }
});