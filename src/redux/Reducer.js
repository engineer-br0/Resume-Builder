import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    c : 0,
    isDarkMode : false
}

export const customReducer = createReducer(initialState, {
    increment : (state, action) =>{
        state.c += action.payload;
    },

    setIsDarkMode : (state, action) =>{
        state.isDarkMode = !(state.isDarkMode);
    }
})

