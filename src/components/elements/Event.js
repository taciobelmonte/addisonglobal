import React, { Component } from 'react';
import {connect} from 'react-redux'
import Market from './Market'

class Event extends Component {

    render() {
        const {event} = this.props;
        return (
            <div id={event.id.toLowerCase()} className="event fadeIn animated">
                <div className="event-header">
                    <h2>{event.name}</h2>
                </div>
                <div className="event-content">
                    {event.markets.map((marketID, index) => (
                        <Market id={marketID} key={index}/>
                    ))}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props){
    return{
        events: state.events,
    }
}

export default connect(mapStateToProps)(Event);