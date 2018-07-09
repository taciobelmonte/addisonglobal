import React, { Component } from 'react';
import {connect} from 'react-redux'
import {changeBetslipStatus, remove} from './../../actions'

class Betslip extends Component {

    handleClick = (e, status) =>{
        if(status === 'true'){
            this.props.changeBetslipStatus("false");
        }else{
            this.props.changeBetslipStatus("true");
        }
    };

    componentDidMount(){

        //Close betslip when pressing esc
        document.addEventListener('keyup', (e) => {
            if (e.keyCode === 27)
                this.props.changeBetslipStatus("false");
        });
    }

    removeFromBetslip = (marketId) =>{
        this.props.remove(marketId);
        this.props.changeBetslipStatus("false");
    };

    render() {
        const {markets, betslip, selections} = this.props;

        return (
            <div id="betslip" className={betslip.status}>

                <a onClick={(e) => this.handleClick(e, betslip.status)} className="button">
                    <span className="line-1"></span>
                    <span className="line-2"></span>
                    <span className="line-3"></span>
                </a>

                <div className="betslip-container">
                    {betslip.data && Object.keys(betslip.data).map((item, index) => (
                        <div key={index} className="betslip-market">
                            <p className="betslip-market-name">{selections[betslip.data[item]].name + " "+ markets[item].name}</p>
                            <div className="betslip-selection">
                                <p className="betslip-selection-price">{selections[betslip.data[item]].price}</p>
                            </div>
                            <button onClick={(id) => this.removeFromBetslip(markets[item].id)} className="delete-selection">Delete</button>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return{
        betslip: state.betslip,
        markets: state.markets,
        selections: state.selections,
    }
}

function mapDispatchToProps(dispatch){
    return {
        remove: (marketId) => dispatch(remove(marketId)),
        changeBetslipStatus: (status) => dispatch(changeBetslipStatus(status)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Betslip);