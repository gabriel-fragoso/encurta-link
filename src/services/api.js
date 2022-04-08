
import axios from 'axios';

export const key = "056b427a158cef92a5733bb8243e1a434005db48"

const api = axios.create({
    baseURL: 'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization':`Bearer ${key}`
    }
})

export default api;