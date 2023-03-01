import {configureStore } from '@reduxjs/toolkit';
import Reducer from './state';
import ResponseReducer from './responseState'


export const store = configureStore({
    reducer: {
        countReducer: Reducer,
        responseReducer: ResponseReducer
    }
}) 