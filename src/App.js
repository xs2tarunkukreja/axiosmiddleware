import './App.css';

import React from 'react';
import { connect } from "react-redux";
import ToWhom from './components/towhom';
import Message from './components/message';
import {appEvent} from './actions/offline';

class App extends React.Component {
    render() {
        return (
          <div className="App">
          <header className="App-header">            
            <div>
            <Message/>
            <ToWhom/>
          </div>
          <button onClick={() => this.props.appEvent()}>App Event</button>
          </header>          
        </div>
        )
    }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({  
  appEvent: () => dispatch(appEvent())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);