import React from 'react';
import List from '../list';
import { API } from '../../services';
import { dataWrapper } from '../hoc-helpers';

const APIService = new API();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = APIService;

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
const renderName = ({ name }) => <span>{name}</span>
const renderNameAndModel = ({ model, name }) => <span>{name} ({model})</span>

const PeopleList = dataWrapper(withChildrenFunc(List, peopleChildren), getAllPeople);
const PlanetsList = dataWrapper(withChildrenFunc(List, renderName), getAllPlanets);
const StarshipsList = dataWrapper(withChildrenFunc(List, renderNameAndModel), getAllStarships);

export {
  PeopleList,
  PlanetsList,
  StarshipsList
}