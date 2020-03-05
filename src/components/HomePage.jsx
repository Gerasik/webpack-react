import React from 'react';
import { connect } from 'react-redux';
import { INCREMENT, DECREMENT, ADD_COUNTER } from '../redux/actionTypes';

function HomePage({
  counters, addCounter, increment, decrement,
}) {
  if (counters && addCounter) {
    return (
      <>
        <button type="button" onClick={addCounter}>Add counter</button>
        <ul>
          {
            counters.map((item) => (
              <li key={item.id}>
                <b>id:</b>
                {item.id}
                {' '}
                <b>value:</b>
                {item.value}
                <button type="button" onClick={() => increment(item.id)}>+</button>
                <button type="button" onClick={() => decrement(item.id)}>-</button>
              </li>
            ))
          }
        </ul>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  counters: state.counters,
});

const mapDispatchToProps = (dispatch) => ({
  addCounter: () => {
    dispatch({ type: ADD_COUNTER });
  },
  increment: (id) => {
    dispatch({ type: INCREMENT, id });
  },
  decrement: (id) => {
    dispatch({ type: DECREMENT, id });
  },
});

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;
