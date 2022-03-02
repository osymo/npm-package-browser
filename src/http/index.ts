import axios, { AxiosInstance } from "axios";

let axiosInstance: AxiosInstance;

const getAxiosInstance = (): AxiosInstance => {
    if(axiosInstance == null) {
        axiosInstance = axios.create({
           baseURL: 'https://api.npms.io/v2/'
       });
    }
    return  axiosInstance
}

export default getAxiosInstance;
  