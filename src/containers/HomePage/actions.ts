import ActionType from './constants';
import { ActionInterace } from './models';

export const addCounter = (): ActionInterace => {
  return { type: ActionType.ADD_COUNTER, payload: { value: 10 } };
};

export const increment = (id: number, value: number): ActionInterace => {
  return { type: ActionType.INCREMENT, payload: { id, value } };
};

export const decrement = (id: number, value: number): ActionInterace => {
  return { type: ActionType.DECREMENT, payload: { id, value } };
};
