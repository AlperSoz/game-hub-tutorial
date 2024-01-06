import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '2116922a8c554952880b2eab52d212c0'
    }
})