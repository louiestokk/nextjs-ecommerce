'use client'

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    productsArray:[],
    allCategories:[]
}

export const productsSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        addProducts:(state,payload)=>{
            state.productsArray = payload
        },
        addCategories:(state,payload)=>{
            state.allCategories = payload
        }
    }
})

export const {addProducts,addCategories} = productsSlice.actions
export default productsSlice.reducer