import { Map } from 'immutable';
import { Counter, Action } from './models';
import ActionType from './constants';

const initialState: Counter = {
  1: 5,
  2: 7,
  counterCount: 2,
};

const counters = (state = Map(initialState), action: Action) => {
  switch (action.type) {
    case ActionType.INCREMENT: {
      return state.set(`${action.id}`, action.value + 1);
    }
    case ActionType.DECREMENT: {
      return state.set(`${action.id}`, action.value - 1);
    }
    case ActionType.ADD_COUNTER: {
      const pos = state.get('counterCount') + 1;
      return state.set(`${pos}`, 0).set('counterCount', pos);
    }
    default:
      return state;
  }
};

export default counters;
