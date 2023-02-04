import axios from 'axios';

const Axios = axios.create({
    baseURL: 'https://newsroom-server.onrender.com'
});

export const getData = async (route) => {
    try{
        const res = await Axios.get(route);
        return res.data;
    }
    catch(e) {
        console.error(`Error:: ${e.message}`);
    }
}