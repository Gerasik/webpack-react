import { createStore } from 'redux';
import { INCREMENT, DECREMENT, ADD_COUNTER } from './actionTypes';

const initialState = {
  counters: [
    {
      id: 111,
      value: 0,
    },
  ],
};

const counters = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      const newCounters = state.counters;
      newCounters[state.counters.findIndex((i) => i.id === action.id)].value += 1;
      return {
        ...state,
        counters: [...newCounters],
      };
    }
    case DECREMENT: {
      const newCounters = state.counters;
      newCounters[state.counters.findIndex((i) => i.id === action.id)].value -= 1;
      return {
        ...state,
        counters: [...newCounters],
      };
    }
    case ADD_COUNTER: {
      const newCounter = {
        id: state.counters[state.counters.length - 1].id + 1,
        value: 0,
      };
      return {
        ...state,
        counters: [...state.counters, newCounter],
      };
    }
    default:
      return state;
  }
};

const store = createStore(
  counters, /* preloadedState, */
  // eslint-disable-next-line no-underscore-dangle
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
