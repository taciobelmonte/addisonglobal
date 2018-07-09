import React, { Component } from 'react';
import {connect} from 'react-redux'
import {add, remove} from './../../actions'

export class Selection extends Component {

    handleBetslip = (selectionId, marketId, marketSelected) =>{
        if(marketSelected === 'added'){
            //Remove from Betslip
            this.props.remove(marketId);
        }else{
            //Add to Betslip
            this.props.add(selectionId, marketId);
        }
    };

    render() {
        const {key, selection, market, selected} = this.props;
        return (
            <a onClick={() => this.handleBetslip(selection.id, market, selected[market])}
               key={key}
               className={"event-selection zoomIn animated " + selected[market]}>
                <span className="selection-name">{selection.name}</span>
                <span className="selection-price">{selection.price}</span>
            </a>
        );
    }
}

function mapStateToProps(state, props){
    let selection = {};
    let obj = {};

    //Filter market by ID and retrieve object in props of the single market
    Object.keys(state.selections).filter(function(item){
        if (props.id === item)
            selection = state.selections[item];
        return selection;
    });

    Object.keys(state.betslip.data).filter(function(item){
        if(item === props.market && state.betslip.data[item] === props.id){
            obj[props.market] = 'added';
            return true;
        }
        return false;
    });
    return { selection:selection, selected:obj }
}

function mapDispatchToProps(dispatch){
    return {
        add: (selectionId, marketId) => dispatch(add(selectionId, marketId)),
        remove: (marketId) => dispatch(remove(marketId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Selection);