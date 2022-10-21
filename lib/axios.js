import axios from 'axios';

axios.defaults.baseURL = "http://localhost:8000";
const url  = axios.defaults.baseURL
const axioss = axios.create({
    'baseURL': url,
    'headers': {'X-Requested-With': 'XMLHttpRequest' ,"content-type": 'multipart/form-data'  },
    'withCredentials': true,
})

export default axioss