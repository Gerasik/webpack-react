import { INCREMENT, DECREMENT, ADD_COUNTER } from './actionTypes';

export const addCounterAction = () => {
  return { type: ADD_COUNTER };
};

export const incrementAction =  (id: number) => {
  return { type: INCREMENT, id };
};

export const decrementAction = (id: number) => {
  return { type: DECREMENT, id };   
};
