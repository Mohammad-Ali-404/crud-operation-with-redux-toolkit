/* eslint-disable no-unused-vars */
import React from 'react';
import Layout from '../../components/Layout';
import Balance from '../../components/Balance';
import Form from '../../components/Form';
import Transactions from '../../components/Transaction/Transactions';
import '../../../public/css/style.css'
const Home = () => {
    return (
        <Layout>
            <Balance />
            <Form />
            <Transactions />
        </Layout>
    );
};

export default Home;