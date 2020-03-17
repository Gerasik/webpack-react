import Immutable from 'immutable';

import * as Models from './models';
import ActionType from './constants';

const initialState: Models.State = Immutable.fromJS({
  1: 5,
  2: 7,
});

const increaseValue: Models.Reducer<Models.State> = (state, action) => {
  const { id, value } = action.payload;

  return state.set(`${id}`, value + 1);
};

const decreaseValue: Models.Reducer<Models.State> = (state, action) => {
  const { id, value } = action.payload;

  return state.set(`${id}`, value - 1);
};

const addCounter: Models.Reducer<Models.State> = (state, action) => {
  const pos = state.get('counterCount') + 1;
  return state.set(`${pos}`, 0).set('counterCount', pos);
};

const homePageReducer: Models.Reducer<Models.State> = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return increaseValue(state, action);
    case ActionType.DECREMENT:
      return decreaseValue(state, action);
    case ActionType.ADD_COUNTER:
      return addCounter(state, action);
    default:
      return state;
  }
};

export default homePageReducer;
