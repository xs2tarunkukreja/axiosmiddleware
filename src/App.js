import './App.css';

import React from 'react'
import ToWhom from './components/towhom'
import Message from './components/message'

class App extends React.Component {
    render() {
        return (
          <div className="App">
          <header className="App-header">            
            <div>
            <Message/>
            <ToWhom/>
          </div>
          </header>          
        </div>
        )
    }
}

export default App;
