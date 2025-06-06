import { configureStore } from '@reduxjs/toolkit'
import authReducer from "../reducers/authReducer";
import bankReducer from "../reducers/bankReducer";

const store = configureStore({
    reducer: {auth: authReducer, banks: bankReducer}
})

export default store