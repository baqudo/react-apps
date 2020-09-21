import React from 'react';
import List from '../list';
import { withData, withApiService, withChildrenFunc, compose } from '../hoc-helpers';

const peopleChildren =  ({name, gender, birthYear}) => (<span>{name} ({gender}, {birthYear})</span>);
const renderName = ({ name }) => <span>{name}</span>;
const renderNameAndModel = ({ model, name }) => <span>{name} ({model})</span>;

const mapPeopleMethodsToProps = (apiService) => {
  return {
    getData: apiService.getAllPeople
  }
};

const mapPlanetsMethodsToProps = (apiService) => {
  return {
    getData: apiService.getAllPlanets
  }
};

const mapStarshipsMethodsToProps = (apiService) => {
  return {
    getData: apiService.getAllStarships
  }
};

const PeopleList = compose(
  withApiService(mapPeopleMethodsToProps),
  withData,
  withChildrenFunc(peopleChildren)
)(List);

const PlanetsList = compose(
  withApiService(mapPlanetsMethodsToProps),
  withData,
  withChildrenFunc(renderName)
)(List);

const StarshipsList = compose(
  withApiService(mapStarshipsMethodsToProps),
  withData,
  withChildrenFunc(renderNameAndModel)
)(List);

export {
  PeopleList,
  PlanetsList,
  StarshipsList
}