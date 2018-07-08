import React, { Component } from 'react';
import EventList from './../components/views/EventList'
import Betslip from './../components/views/Betslip'
import {connect} from 'react-redux'
import {fetchEvents, fetchMarkets, fetchSelections} from './../actions'

export class App extends Component {

    componentDidMount(){
        //Fetch all data and push it into the Redux store
        this.props.fetchEvents();
        this.props.fetchMarkets();
        this.props.fetchSelections();
    }

    render() {
        const {betslipStatus} = this.props;

        return (
            <section id="bet-app">

                <Betslip />
                <EventList />

                <div id="overlay" className={betslipStatus}></div>

            </section>
        );
    }
}

function mapStateToProps(state){
    return{
        betslipStatus: state.betslip.status
    }
}

function mapDispatchToProps(dispatch){
    return {
        fetchEvents: () => dispatch(fetchEvents()),
        fetchMarkets: () => dispatch(fetchMarkets()),
        fetchSelections: () => dispatch(fetchSelections())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


