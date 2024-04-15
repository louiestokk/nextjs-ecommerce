import {combineReducers,configureStore} from '@reduxjs/toolkit'
import loadingReducer from './features/loading/loadingSlice'
import productsReducer from './features/products/productsSlise'

const rootReducer = combineReducers({
    loading:loadingReducer,
    products:productsReducer
})

export const store = configureStore({
    reducer:rootReducer
})