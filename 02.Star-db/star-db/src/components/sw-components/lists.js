import List from '../list';
import { API } from '../../services';
import { dataWrapper } from '../hoc-helpers';

const APIService = new API();

const {
  getAllPeople,
  getAllPlanets,
  getAllStarships
} = APIService;

const PeopleList = dataWrapper(List, getAllPeople);
const PlanetsList = dataWrapper(List, getAllPlanets);
const StarshipsList = dataWrapper(List, getAllStarships);

export {
  PeopleList,
  PlanetsList,
  StarshipsList
}