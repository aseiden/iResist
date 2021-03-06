import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/index';
import FindProtest from './FindProtest.jsx';
import Dashboard from './Dashboard.jsx';
import ProtestForm from './ProtestForm.jsx';
import { Header, Button, Fist } from './StyledComponents.jsx';
import styled from 'styled-components';
import DayOfContainer from './DayOfContainer.jsx';
import DayOfMap from './DayOfMap.jsx';
import DayOfFeed from './DayOfFeed.jsx';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.updateView = this.updateView.bind(this);
  }

  componentDidMount() {
    this.props.getUserId();
  }

  updateView(view) {
    this.props.changeView(view);
  }

  render() {
    console.log('CURRENT VIEW FROM APP', this.props.views.currentView)
    console.log('props', this.props);
    const currentView = this.props.views.currentView;
    if (currentView === 'SPINNER') {
      return <h1>SPIN LOAD SPIN</h1>;
    }
    if (currentView === 'FIND_PROTEST') {
      return <FindProtest {...this.props} />;
    }
    if (currentView === 'EDIT_PROTEST') {
      return <EditProtest {...this.props} />;
    }
    if (currentView === 'ORGANIZE_PROTEST') {
      return <ProtestForm {...this.props} />;
    }
    if (currentView === 'DAY_OF') {
      return (<DayOfContainer {...this.props} />);
    }
    if (currentView === 'ORGANIZE_PROTEST') {
      return (<ProtestForm {...this.props} />);
    } 
    if (currentView === 'DASHBOARD') {
      return (<Dashboard {...this.props} />)
    }
    else {
      return (
        <div>
          Page not found.
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return Object.assign({}, state);
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
