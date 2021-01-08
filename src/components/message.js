import React from 'react'
import { connect } from "react-redux";
import {msgEvent} from '../actions/offline';

class Message extends React.Component {
    render() {
        return (
            <div className="message">
                <h3>{this.props.offline.message}</h3>
                <button onClick={() => this.props.msgEvent()}>Message Event</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});
  
const mapDispatchToProps = dispatch => ({  
    msgEvent: () => dispatch(msgEvent())
});
  
export default connect(mapStateToProps, mapDispatchToProps)(Message);