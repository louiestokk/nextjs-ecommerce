'use client'

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    productsArray:[]
}

export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProducts:(state,payload)=>{
            state.productsArray = payload
        }
    }
})

export const {addProducts} = productsSlice.actions
export default productsSlice.reducer