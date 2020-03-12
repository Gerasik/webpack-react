import { INCREMENT, DECREMENT, ADD_COUNTER } from './actionTypes';

const initialState = [
  {
    id: 111,
    value: 0,
  },
];

 const  counters = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      const newCounters = state;
      newCounters[state.findIndex((i) => i.id === action.id)].value += 1;
      return [...newCounters];
    }
    case DECREMENT: {
      const newCounters = state;
      newCounters[state.findIndex((i) => i.id === action.id)].value -= 1;
      return [...newCounters];
    }
    case ADD_COUNTER: {
      const newCounter = {
        id: state[state.length - 1].id + 1,
        value: 0,
      };
      return [...state, newCounter];
    }
    default:
      return state;
  }
};

export default counters;
