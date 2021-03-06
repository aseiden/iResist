import axios from 'axios';
import { changeView } from './navActions.js';
import { fetchData } from './fetchDataActions';
import { asyncWrapper } from './asyncWrappers';

export const getUserIdSuccess = (user) => {
  return {
    type: 'GET_USER_ID_SUCCESS',
    user
  };
};

export const getUserEventsSuccess = (userEvents) => {
  return {
    type: 'GET_USER_EVENTS_SUCCESS',
    userEvents
  };
};

export const getUserEvents = (userId) => dispatch => {
  return axios.get('/api/user/events', {
    params: {
      userId: userId
    }
  })
  .then(response => {
    return dispatch(getUserEventsSuccess(response.data));
  });
  // .catch(err => {
  //   return ['ERROR-ERROR', err];
  // });
};

export const getUserId = () => {
  return dispatch => {
    dispatch(changeView('SPINNER'));
    axios.get('/api/user/id')
      .then(response => {
        dispatch(getUserIdSuccess(response.data.user));
        dispatch(fetchData(response.data.user.id, 'DASHBOARD'));
      });
      // .catch(error => {
      //   dispatch(changeView('ERROR'));
      // });
  };
};
