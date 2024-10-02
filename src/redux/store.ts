import { configureStore } from '@reduxjs/toolkit'
import categorySlice from './slice/categorySlice'
import  productByCategorySlice  from './slice/ProductByCategoru';

export const store = configureStore({
  reducer: {categorySlice , productByCategorySlice} ,
})

export type StoreType = ReturnType<typeof store.getState>;
