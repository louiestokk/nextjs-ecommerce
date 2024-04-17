'use client'

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userCart:[]
}

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        setUserCart:(state,payload)=>{
            state.userCart=payload
        }
    }
})

export const {setUserCart} = cartSlice.actions
export default cartSlice.reducer