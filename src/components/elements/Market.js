import React, { Component } from 'react';
import {connect} from 'react-redux'
import Selection from './Selection'

class Market extends Component {

    render() {
        const {key, market} = this.props;

        return (
            <div id={key} className="event-market">
                <p className="market-name">{market.name}</p>

                <div className="event-selection-container">
                    {market.selections && market.selections.map((selectionID, index) =>(
                        <Selection market={market.id} id={selectionID} key={index}/>
                    ))}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, props){
    let market = {};

    //Filter market by ID and retrieve object in props of the single market
    Object.keys(state.markets).filter(function(item){
        if (props.id === item)
            market = state.markets[item];
        return market;
    });

    return { market:market }
}


export default connect(mapStateToProps)(Market);


