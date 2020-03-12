import { INCREMENT, DECREMENT, ADD_COUNTER } from './actionTypes';
import { IAction } from './types'

export const addCounterAction = ():IAction => {
  return { type: ADD_COUNTER };
};

export const incrementAction =  (id: number, value:number):IAction => {
  return { type: INCREMENT, id, value };
};

export const decrementAction = (id: number, value:number):IAction => {
  return { type: DECREMENT, id, value};   
};
