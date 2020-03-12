import { ICounter, IAction } from './types';
import { INCREMENT, DECREMENT, ADD_COUNTER } from './actionTypes';
import { Map } from 'immutable';

const initialState:ICounter = {
  1: 5,
  2: 7,
  counterCount: 2
}

 const  counters = (state = Map(initialState), action:IAction) => {
  switch (action.type) {
    case INCREMENT: {
      return state.set(`${action.id}`, action.value + 1);
    }
    case DECREMENT: {
      return state.set(`${action.id}`, action.value - 1);
    }
    case ADD_COUNTER: {
      const pos = state.get("counterCount") + 1;
      return state.set(`${pos}`, 0).set("counterCount", pos);
    }
    default:
      return state;
  }
};

export default counters;
