import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';
import FindProtest from './FindProtest.jsx';
import Dashboard from './Dashboard.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hello from the app! {console.log(this.props.voteItem)}</h1>
        <Dashboard {...this.props} />
        <FindProtest {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return Object.assign({}, state);
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
