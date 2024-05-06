'use client'

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    namn:null,
    email:null,
    telefon:null,
    adress:null,
}

export const customerSlice = createSlice({
    name:'customer',
    initialState,
    reducers:{
        addName:(state,payload) =>{
            state.namn = payload
        },
        addEmail:(state,payload)=>{
            state.email = payload
        },
        addTele:(state,payload)=>{
            state.telefon=payload
        },
        addAdress:(state,payload)=>{
            state.adress=payload
        }
    }
})

export const {addName,addEmail,addTele,addAdress} = customerSlice.actions
export default customerSlice.reducer