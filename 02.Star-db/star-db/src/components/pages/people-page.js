import React from 'react';
import Row from '../row';
import {
  PeopleList,
  PeopleDetails,
} from '../sw-components';
import { withRouter } from 'react-router-dom';


const PeoplePage = ({ match, history }) => {
  const { id } = match.params;

  return (
    <Row
      left={<PeopleList onItemClick={id => history.push(id)} />}
      right={<PeopleDetails id={id} />}
    />
  )
}

export default withRouter(PeoplePage);