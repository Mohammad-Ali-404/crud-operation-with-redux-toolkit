import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTransaction, editTransaction, deleteTransaction, addTransaction } from "./TransactionApi";
const initialState= {
    transactions: [],
    isLoading: false,
    isError: false,
    error: ""
}
// async thunk
export const fetchTransactions = createAsyncThunk('transactions/fetchTransactions', async () =>{
    const transactions = await getTransaction()
    return transactions;
}) 
export const createTransaction = createAsyncThunk('transactions/createTransaction', async (data) =>{
    const transaction = await addTransaction(data)
    return transaction;
}) 
export const changeTransactions = createAsyncThunk('transactions/changeTransactions', async ({id, data}) =>{
    const transactions = await editTransaction(id, data)
    return transactions;
}) 
export const removeTransaction = createAsyncThunk('transactions/removeTransaction', async (id) =>{
    const transaction = await deleteTransaction(id)
    return transaction;
}) 

// create slice

const transactionSlice = createSlice({
    name: 'transaction',
    initialState,
    extraReducers:(builder) =>{
        builder
        // fetch transaction
        .addCase(fetchTransactions.pending, (state) =>{
            state.isError = false,
            state.isLoading = true;
        })
        .addCase(fetchTransactions.fulfilled, (state, action) =>{
            state.isError = false;
            state.isLoading = false;
            state.transactions = action.payload;
        })
        .addCase(fetchTransactions.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
            state.transactions = [];
        })
        
        // create transaction
        .addCase(createTransaction.pending, (state) =>{
            state.isError = false,
            state.isLoading = true;
        })
        .addCase(createTransaction.fulfilled, (state, action) =>{
            state.isError = false;
            state.isLoading = false;
            state.transactions.push(action.payload);
        })
        .addCase(createTransaction.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        })

        // change transaction
        .addCase(changeTransactions.pending, (state) =>{
            state.isError = false,
            state.isLoading = true;
        })
        .addCase(changeTransactions.fulfilled, (state, action) =>{
            state.isError = false;
            state.isLoading = false;
            
            const indexToUpdate = state.transactions.findIndex(t => t.id === action.payload.id)
            state.transactions[indexToUpdate] =  action.payload;
        })
        .addCase(changeTransactions.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        })

        // delete transaction
        .addCase(removeTransaction.pending, (state) =>{
            state.isError = false,
            state.isLoading = true;
        })
        .addCase(removeTransaction.fulfilled, (state, action) =>{
            state.isError = false;
            state.isLoading = false;
            
            state.transactions = state.transactions.filter(t => t.id !== action.payload)
        })
        .addCase(removeTransaction.rejected, (state, action) =>{
            state.isLoading = false;
            state.isError = true;
            state.error = action.error?.message;
        })
    }
})

export default transactionSlice.reducer;