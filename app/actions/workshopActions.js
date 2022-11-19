import * as types from '../actionTypes/workshops';

export function fetchWorkshops() {
  return async dispatch => {
    dispatch({type: types.FETCH_WORKSHOPS});
    try {
      let response = await fetch('http://localhost:3000/workshops');
      if (response.status !== 200) {
        throw new Error('FETCH_ERROR');
      }
      response = await response.json();
      dispatch({type: types.FETCH_WORKSHOPS_SUCCESS, data: response});
    } catch (error) {
      dispatch({type: types.FETCH_WORKSHOPS_FAILURE, error});
    }
  };
}

export function createWorkshop(workshop) {
  return async dispatch => {
    dispatch({type: types.CREATE_WORKSHOP});
    try {
      let response = await fetch('http://localhost:3000/workshops', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({workshop}),
      });
      if (response.status !== 200) {
        throw new Error('FETCH_ERROR');
      }
      response = await response.json();
      dispatch({type: types.CREATE_WORKSHOP_SUCCESS, data: response});
    } catch (error) {
      dispatch({type: types.CREATE_WORKSHOP_FAILURE, error});
    }
  };
}