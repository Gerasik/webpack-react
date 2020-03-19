import ActionType from './constants';
import { ActionInterace } from './models';

export const addCounter = (): ActionInterace => {
  return { type: ActionType.ADD_COUNTER };
};

export const increment = (id: number): ActionInterace => {
  return { type: ActionType.INCREMENT, payload: { id } };
};

export const decrement = (id: number): ActionInterace => {
  return { type: ActionType.DECREMENT, payload: { id } };
};
