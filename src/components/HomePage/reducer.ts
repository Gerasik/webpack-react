import { INCREMENT, DECREMENT, ADD_COUNTER } from './actionTypes';

import { List, Map } from 'immutable';

// const initialState = [
//   {
//     id: 111,
//     value: 0,
//   },
// ];

// type initialState 
const initialState= List([
    {
      id: 111,
      value: 0,
    },
    {
      id: 112,
      value: 5,
    },
  ]);

 const  counters = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT: {
      const pos = state.findIndex(i => i.id === action.id);
      const val = state.get(pos).value + 1;
      return state.setIn([pos,'value'], val );
    }
    case DECREMENT: {
      const pos = state.findIndex(i => i.id === action.id);
      const val = state.get(pos).value - 1;
      return state.setIn([pos,'value'], val );
    }
    case ADD_COUNTER: {
      return state.push({
        id: 111,
        value: 0,
      });
    }
    default:
      return state;
  }
};
//  const  counters = (state = initialState, action) => {
//   switch (action.type) {
//     case INCREMENT: {
//       const newCounters = state;
//       newCounters[state.findIndex((i) => i.id === action.id)].value += 1;
//       return [...newCounters];
//     }
//     case DECREMENT: {
//       const newCounters = state;
//       newCounters[state.findIndex((i) => i.id === action.id)].value -= 1;
//       return [...newCounters];
//     }
//     case ADD_COUNTER: {
//       const newCounter = {
//         id: state[state.length - 1].id + 1,
//         value: 0,
//       };
//       return [...state, newCounter];
//     }
//     default:
//       return state;
//   }
// };

export default counters;
