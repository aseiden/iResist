import { changeView } from './navActions';

export const asyncWrapper = (actions, redirect) => {
  return dispatch => {
    dispatch(changeView('SPINNER'));
    return Promise.all(actions)
      .then(response => {
        dispatch(changeView(redirect));
      })
      .catch(err => {
        dispatch(changeView('ERROR'));
      });
  };
};
