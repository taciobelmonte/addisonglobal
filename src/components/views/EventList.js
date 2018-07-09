import React, { Component } from 'react'
import {connect} from 'react-redux'
import Event from './../elements/Event'

export class EventList extends Component {

     render() {
        const {events} = this.props;
        return (
            <section id="event-list">
                {events && Object.keys(events).map((key, index) => (
                    <Event key={index} event={events[key]}/>
                ))}

            </section>
        );
    }
}

function mapStateToProps(state){
    return{
        events: state.events,
    }
}

export default connect(mapStateToProps)(EventList);