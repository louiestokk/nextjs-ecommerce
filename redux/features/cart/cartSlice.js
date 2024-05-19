'use client'

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userCart:[]
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        dispatchUserCart:(state,payload)=>{
            state.userCart=payload
        }
    }
})

export const {dispatchUserCart} = cartSlice.actions
export default cartSlice.reducer