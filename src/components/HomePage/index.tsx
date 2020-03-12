import { connect } from 'react-redux';
import { addCounterAction, decrementAction, incrementAction } from './actions'
import HomePage from './HomePage'
import { ICounter } from './types';
import { createSelector } from "reselect";

const countersSelector = createSelector(
  [(state: { toJS: () => { counters: ICounter; }; }) => state.toJS().counters],
  (counters) => counters
)

const mapStateToProps = (state: { toJS: () => { counters: ICounter; }; }) => ({
  counters: countersSelector(state)
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; id?: number; value?: number}) => void) => ({
  addCounter: () => {
    dispatch(addCounterAction());
  },
  increment: (id: number, value: number) => {
    dispatch(incrementAction(id, value));
  },
  decrement: (id: number, value: number) => {
    dispatch(decrementAction(id, value));
  },
});

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;
