import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import { addCounter, decrement, increment } from './actions';
import HomePage from '../../components/HomePage';
import { CounterInterace } from './models';

const countersSelector = createSelector(
  [(state: { toJS: () => { counters: CounterInterace } }): any => state.toJS().counters],
  counters => counters
);

const mapStateToProps = (state: { toJS: () => { counters: CounterInterace } }): any => ({
  counters: countersSelector(state),
});

const mapDispatchToProps = {
  addCounter,
  increment,
  decrement,
};

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;
