import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../feature/Transaction/TransactionSlice";

export const store = configureStore({
    reducer:{
       transaction: transactionReducer
    }
});