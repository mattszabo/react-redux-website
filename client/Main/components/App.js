import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../../Counter/actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  // pass the counters reducer the state of our counters
  return {
    counters: state.counters
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

// Container component that will render the presentation component (Counter),
// passing props from the map methods
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default App;
