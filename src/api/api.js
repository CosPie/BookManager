import axios from 'axios';
import qs from 'qs';

// const baseURL = "/api";
const baseURL = "/test";

const getBooksByName = (name) => {
    // return axios.get(`${baseURL}/getBooksByName`, qs.stringify({ q: name }));
    return axios.get(`${baseURL}/v2/book/search`, { params: { q: name } });
};
const test = () => {
    return axios.get(`/test/posts/1`);
}
export default {
    getBooksByName,
    test
}