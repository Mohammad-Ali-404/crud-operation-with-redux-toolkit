import axios from "axios";

const UseAxiosSecureHook = axios.create({
    baseURL: "http://localhost:5000",
});

export default UseAxiosSecureHook;
