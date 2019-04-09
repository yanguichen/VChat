import axios from 'axios'

let port = 3000;
let host = "://localhost:" + port;
let baseURL = "http" + host;
let axiosConfig = {
    baseURL,
    timeout:1000
}

let instanceTap = axios.create(axiosConfig);

export default {
    getAxios:instanceTap,
    getCancelToken:axios.CancelToken
}