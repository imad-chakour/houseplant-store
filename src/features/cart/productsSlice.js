import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [
      {
        id: 'p1',
        name: 'Snake Plant',
        price: 29.99,
        image: '/images/snake+plant.jpg',  // Note: removed '/public' from path
        category: 'Low Maintenance'
      },
      {
        id: 'p2',
        name: 'Monstera',
        price: 39.99,
        image: '/images/monstera.jpg',  // Note: removed '/public' from path
        category: 'Tropical'
      },
      {
        id: 'p3',
        name: 'Peace Lily',
        price: 24.99,
        image: '/images/Peace-Lily.jpg',
        category: 'Flowering'
      },
      {
        id: 'p4',
        name: 'Aloe Vera',
        price: 19.99,
        image: '/images/Aloe_vera.jpg',
        category: 'Succulents'
      },
      {
        id: 'p5',
        name: 'Fiddle Leaf Fig',
        price: 49.99,
        image: '/images/FiddleLeafFig.jpg',
        category: 'Tropical'
      },
      {
        id: 'p6',
        name: 'ZZ Plant',
        price: 34.99,
        image: '/images/zzplant.jpeg',
        category: 'Low Maintenance'
      }
    ],
    categories: ['Low Maintenance', 'Tropical', 'Flowering', 'Succulents']
  },
  reducers: {}
});

export default productsSlice.reducer;