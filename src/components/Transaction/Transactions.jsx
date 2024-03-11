import React from 'react';
import Transaction from './Transaction';
import { useSelector } from 'react-redux';

const Transactions = () => {
    const {isLoading, isError, error, transactions} = useSelector(state => state.transaction);

    let content = null;
    if(isLoading) content = <p>Loading</p>;

    if(!isLoading && isError) content = <p className='error'>There was an error occured</p>
    if(!isLoading && !isError && transactions?.length > 0){
        content = transactions.map( transaction => <Transaction key={transaction.id} transaction={transaction}/>)    
    }
    if(!isLoading && !isError && transactions?.length === 0){
        content = <p>No Transactions Found!</p>   
    }

    return (
        <>
        <p className="second_heading">Your Transactions:</p>

        <div className="conatiner_of_list_of_transactions">
            <ul>
               {content}
            </ul>
        </div>
    </>
    );
};

export default Transactions;