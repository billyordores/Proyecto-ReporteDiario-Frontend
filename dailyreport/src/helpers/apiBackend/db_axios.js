import axios from "axios";

export default axios.create({
    baseURL: `http://172.22.18.12:4000/api`
})