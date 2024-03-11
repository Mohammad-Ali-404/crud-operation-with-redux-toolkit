import UseAxiosSecureHook from '../../Hooks/UseAxiosSecureHook'

export const getTransaction = async() => {
    const response = await UseAxiosSecureHook.get('/transactions')
    return response.data;
};
export const addTransaction = async(data) => {
    const response = await UseAxiosSecureHook.post('/transactions', data)
    return response.data;
};
export const editTransaction = async(id, data) => {
    const response = await UseAxiosSecureHook.put(`/transactions/${id}`, data)
    return response.data;
};
export const deleteTransaction = async(id) => {
    const response = await UseAxiosSecureHook.delete(`/transactions/${id}`)
    return response.data;
};

