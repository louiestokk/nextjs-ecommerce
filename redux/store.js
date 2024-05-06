import {combineReducers,configureStore} from '@reduxjs/toolkit'
import loadingReducer from './features/loading/loadingSlice'
import productsReducer from './features/products/productsSlise'
import cartReducer from './features/cart/cartSlice'
import customerReducer from './features/customer/customerSlice'
const rootReducer = combineReducers({
    loading:loadingReducer,
    products:productsReducer,
    cart:cartReducer,
    customer:customerReducer
})

export const store = configureStore({
    reducer:rootReducer
})