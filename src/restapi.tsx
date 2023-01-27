import { obj } from "./type/basic";
import axios from "axios";



axios.defaults.withCredentials = true;

const REST_HOST = "http://localhost:8000";

const api = {
  
  config: {
    baseURL: REST_HOST,
    headers: {
      'Content-Type' : 'application/json; charset=UTF-8',
      'Authorization': ''
    }
  },

  setAuthorizationHeader(token: string) {
    this.config.headers.Authorization = `bearer ${token}`
    this.instance = axios.create(this.config)
  },

  instance: axios.create({})
}
api.instance = axios.create(api.config)



const restapi = {

  get: async (url: string) : Promise<any> => {
    return api.instance.get(url)
    .then(res => res.data)
    .catch(e => { throw new Error(e) })
  },

  post: async(url: string, data: obj) : Promise<obj> => {
    return api.instance.post(url)
    .then(res => res.data)
    .catch(e => { throw new Error(e) })
  }
}

export default restapi;