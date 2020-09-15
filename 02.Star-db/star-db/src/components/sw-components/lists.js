import React from 'react';
import List from '../list';
import { withData, withApiService } from '../hoc-helpers';

const withChildrenFunc = (Wrapped, fn) => {
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    )
  }
}

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

const PeopleList = withApiService(
  withData(withChildrenFunc(List, peopleChildren)),
  mapPeopleMethodsToProps
);

const PlanetsList = withApiService(
  withData(withChildrenFunc(List, renderName)),
  mapPlanetsMethodsToProps
);

const StarshipsList = withApiService(
  withData(withChildrenFunc(List, renderNameAndModel)),
  mapStarshipsMethodsToProps
)

export {
  PeopleList,
  PlanetsList,
  StarshipsList
}