import { connect } from 'react-redux';
import { addCounterAction, decrementAction, incrementAction } from './actions'
import HomePage from './HomePage'

const mapStateToProps = (state) => ({
  counters: state.toJS().counters,
});

const mapDispatchToProps = (dispatch: (arg0: { type: string; id?: number; }) => void) => ({
  addCounter: () => {
    dispatch(addCounterAction());
  },
  increment: (id: number) => {
    dispatch(incrementAction(id));
  },
  decrement: (id: number) => {
    dispatch(decrementAction(id));
  },
});

const HomePageContainer = connect(mapStateToProps, mapDispatchToProps)(HomePage);

export default HomePageContainer;
