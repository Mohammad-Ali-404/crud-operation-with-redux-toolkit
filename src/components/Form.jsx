/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createTransaction } from '../feature/Transaction/TransactionSlice';

const Form = () => {
    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [amount, setAmount] = useState('')
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch()
    const {isLoading, isError, error} = useSelector(state => state.transaction)
    const reset = () =>{
        setName('');
        setType("");
        setAmount('')
    }
    const handleCreate = (e) =>{
        e.preventDefault()
        dispatch(createTransaction({
            name,
            type,
            amount: Number(amount)
        }))
        reset()
    }

    return (
        <div className="form">
            <h3>Add new transaction</h3>
            <form onSubmit={handleCreate}>
                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter Salary Title"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group radio">
                    <label>Type</label>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="income"
                            name="type"
                            checked = {type === 'income'}
                            onChange={(e) => setType('income')}
                            required
                        />
                        <label>Income</label>
                    </div>
                    <div className="radio_group">
                        <input
                            type="radio"
                            value="expense"
                            name="type"
                            placeholder="Expense"
                            checked = {type === 'expense'}
                            onChange={(e) => setType('expense')}
                        />
                        <label>Expense</label>
                    </div>
                </div>

                <div className="form-group">
                    <label for="transaction_amount">Amount</label>
                    <input
                        type="number"
                        placeholder="300"
                        name="Enter amount"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                        required
                    />
                </div>

                <button disabled={isLoading} className="btn" type='submit'>Add Transaction</button>
                {isLoading && isError && <p className="error">There was an Occured</p>}
            </form>
            <button className="btn cancel_edit">Cancel Edit</button>
        </div>
    );
};

export default Form;