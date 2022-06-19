import {
  REQUEST_COMMINGSOON,
  RECEIVE_COMMINGSOON,
  RECEIVE_COMMINGSOON_SUCCESS,
} from './comming.types';

export const requestCommingSoon = () => ({
  type: REQUEST_COMMINGSOON,
});

export const receiveCommingSoon = (payload: any) => ({
  type: RECEIVE_COMMINGSOON,
  payload,
});

export const requestCommingSoonSuccess = (payload: any) => ({
  type: RECEIVE_COMMINGSOON_SUCCESS,
  payload,
});
