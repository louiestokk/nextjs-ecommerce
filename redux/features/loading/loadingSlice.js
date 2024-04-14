'use client'

import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isLoadingload:false
}

export const loadingSlice = createSlice({
    name:'loading',
    initialState,
    reducers:{
        isLoading:(state)=>{
            state.isLoadingload = true
        },
        stopLoading:(state)=>{
            state.isLoadingload=false
        }
    }
})

export const { isLoading,stopLoading} = loadingSlice.actions
export default loadingSlice.reducer