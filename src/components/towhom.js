import React from 'react'
import { connect } from "react-redux";
import {toWhomEvent} from '../actions/offline';

class ToWhom extends React.Component {
    render() {
        return (
            <div className="towhom">
                <h1>{this.props.offline.towhom}</h1>
                <button onClick={() => this.props.toWhomEvent()}>To ToWhom Event</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    ...state
});
  
const mapDispatchToProps = dispatch => ({  
    toWhomEvent: () => dispatch(toWhomEvent())
});
  
export default connect(mapStateToProps, mapDispatchToProps)(ToWhom);