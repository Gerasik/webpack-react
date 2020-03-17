import { INCREMENT, DECREMENT, ADD_COUNTER } from './actionTypes';
import { Action } from './models';

export const addCounterAction = (): Action => {
  return { type: ADD_COUNTER };
};

export const incrementAction = (id: number, value: number): Action => {
  return { type: INCREMENT, id, value };
};

export const decrementAction = (id: number, value: number): Action => {
  return { type: DECREMENT, id, value };
};
