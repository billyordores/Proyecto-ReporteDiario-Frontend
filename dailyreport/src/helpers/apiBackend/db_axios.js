import axios from "axios";

export default axios.create({
    baseURL: `http://172.27.17.180:4000/`
})