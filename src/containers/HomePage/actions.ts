import ActionType from './constants';
import { ActionInterace } from './models';

export const addCounterAction = (): ActionInterace => {
  return { type: ActionType.ADD_COUNTER };
};

export const incrementAction = (id: number, value: number): ActionInterace => {
  return { type: ActionType.INCREMENT, payload: { id, value } };
};

export const decrementAction = (id: number, value: number): ActionInterace => {
  return { type: ActionType.DECREMENT, payload: { id, value } };
};
