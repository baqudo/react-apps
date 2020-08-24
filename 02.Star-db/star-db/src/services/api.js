import axios from "axios";
import toCamelCase from './toCamelCase';
import matchId from './matchId';

const $axios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,//"https://swapi.dev/api/",
  responseType: "json"
});

const API = {
  async get(url) {
    const { data } = await $axios.get(url);

    const transformedData = {
      id: matchId(data.url)
    };
    
    Object.keys(data).forEach(key => {
        const newKey = toCamelCase(key);
        transformedData[newKey] = data[key];
    });

    return transformedData;
  }
}

export default API;