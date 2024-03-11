import React from 'react';
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const Transaction = ({transaction}) => {
    const {name, amount, type} = transaction;
    return (
        <li className={`transaction ${type}`}>
            <p>{name}</p>
            <div className="right">
                <p>{amount}</p>
                <button className="link">
                    <FaEdit/>
                </button>
                <button className="link">
                    <FaTrashAlt/>
                </button>
            </div>
        </li>
    );
};

export default Transaction;