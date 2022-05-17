import axios from "axios";

export default axios.create({
    baseURL: `http://172.27.65.60:4000/`
})