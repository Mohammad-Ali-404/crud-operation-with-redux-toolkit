import React from 'react';
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const Transaction = () => {
    return (
        <li className="transaction income">
            <p>Earned this month</p>
            <div className="right">
                <p>৳ 100</p>
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