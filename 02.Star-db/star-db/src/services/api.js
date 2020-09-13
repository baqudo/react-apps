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

  addItemId(item) {
    item.id = matchId(item.url)
    return item;
  }

  addImageUrl(item, path) {
    item.imgUrl = `${process.env.REACT_APP_ASSETS_URL}/img/${path}/${item.id}.jpg`
    return item;
  }

  getAllPeople = async () => {
    const { data } = await $axios.get('people');
    return data.results.map(item => this.transformedData(this.addItemId(item)));
  }

  getPerson = async (id) => {
    let { data } = await $axios.get(`people/${id}`);
    data = this.transformedData(data);
    data = this.addItemId(data);
    data = this.addImageUrl(data, 'characters');
    return data;
  }

  getAllPlanets = async () => {
    const { data } = await $axios.get('planets');
    return data.results.map(this.addItemId);
  }

  getPlanet = async (id) => {
    let { data } = await $axios.get(`planets/${id}`);
    data = this.transformedData(data);
    data = this.addItemId(data);
    data = this.addImageUrl(data, 'planets');
    return data;
  }

  getAllStarships = async () =>{
    const { data } = await $axios.get('starships');
    return data.results.map(this.addItemId);
  }

  getStarship = async (id) => {
    let { data } = await $axios.get(`starships/${id}`);
    data = this.transformedData(data);
    data = this.addItemId(data);
    data = this.addImageUrl(data, 'starships');
    return data;
  }

};
