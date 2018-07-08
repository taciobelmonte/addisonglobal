import { combineReducers } from 'redux';
import eventsReducer from './eventsReducer';
import marketsReducer from './marketsReducer';
import selectionsReducer from './selectionsReducer';
import betslipReducer from './betslipReducer';

const reducer = combineReducers({
    events: eventsReducer,
    markets: marketsReducer,
    selections: selectionsReducer,
    betslip: betslipReducer
});

export default reducer;