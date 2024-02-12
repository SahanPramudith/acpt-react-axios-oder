import axios from "axios";

const instence = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com'
})
export default instence;