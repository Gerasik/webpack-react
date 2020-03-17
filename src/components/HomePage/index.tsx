import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { addCounterAction, decrementAction, incrementAction } from './actions';
import HomePage from './HomePage';
import { Counter, Action } from './models';

const countersSelector = createSelector(
  [(state: { toJS: () => { counters: Counter } }): any => state.toJS().counters],
  counters => counters
);

const mapStateToProps = (state: { toJS: () => { counters: Counter } }): any => ({
  counters: countersSelector(state),
});

type Dispatch = (func: Action) => void;

const mapDispatchToProps = (dispatch: Dispatch): any => ({
  addCounter: (): void => {
    dispatch(addCounterAction());
  },
  increment: (id: number, value: number): void => {
    dispatch(incrementAction(id, value));
  },
  decrement: (id: number, value: number): void => {
    dispatch(decrementAction(id, value));
  },
});

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;
