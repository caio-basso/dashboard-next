import axios, {Axios, AxiosInstance} from "axios";

const nestApi: AxiosInstance = axios.create({
        baseURL: 'http://nest.localhost',
});

export default nestApi;