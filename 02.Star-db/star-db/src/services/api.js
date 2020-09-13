import axios from "axios";
import toCamelCase from './toCamelCase';
import matchId from './matchId';

const $axios = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  responseType: 'json'
});

export default class API {

  async get(url) {
    const { data } = await $axios.get(url);

    const transformedData = {};
    if (data.url) transformedData.id = matchId(data.url)
    
    Object.keys(data).forEach(key => {
        const newKey = toCamelCase(key);
        transformedData[newKey] = data[key];
    });

    return transformedData;
  }

  transformedData(data) {
    const transformedData = {};
    Object.keys(data).forEach(key => {
      const newKey = toCamelCase(key);
      transformedData[newKey] = data[key];
    });
    return transformedData;
  }

  transformItem(item) {
    return {
      ...item,
      id: matchId(item.url)
    }
  }

  getAllPeople = async () => {
    const { data } = await $axios.get('people');
    return data.results.map(item => this.transformedData(this.transformItem(item)));
  }

  getPerson = async (id) => {
    const { data } = await $axios.get(`people/${id}`);
    console.log({ data });
    return data.results.map(this.transformItem);
  }

  getAllPlanets = async () => {
    const { data } = await $axios.get('planets');
    return data.results.map(this.transformItem);
  }

  getPlanet = async (id) => {
    const { data } = await $axios.get(`planets/${id}`);
    return data.results.map(this.transformItem);
  }

  getAllStarships = async () =>{
    const { data } = await $axios.get('starships');
    return data.results.map(this.transformItem);
  }
  getStarship = async (id) => {
    const { data } = await $axios.get(`starships/${id}`);
    return data.results.map(this.transformItem);
  }

};
