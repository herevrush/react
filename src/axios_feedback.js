import axios from "axios";

const PROTOCOL = "http";
const hostname = "localhost";
const PORT = 3003;

const instance = axios.create({
    baseURL: `${PROTOCOL}://${hostname}:${PORT}/`
});

export default instance;
