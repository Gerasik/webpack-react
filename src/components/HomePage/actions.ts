import ActionType from './constants';
import { Action } from './models';

export const addCounterAction = (): Action => {
  return { type: ActionType.ADD_COUNTER };
};

export const incrementAction = (id: number, value: number): Action => {
  return { type: ActionType.INCREMENT, id, value };
};

export const decrementAction = (id: number, value: number): Action => {
  return { type: ActionType.DECREMENT, id, value };
};
