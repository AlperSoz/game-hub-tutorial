import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'd4098c0575874cb78ab7bd36ed7e35db'
    }
})