import axios from 'axios'

const apiService = axios.create({
    baseURL: 'https://api.giphy.com/v1/',
    timeout: 5000,
})

export default apiService;
