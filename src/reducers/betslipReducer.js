import {
    ADD_TO_BETSLIP,
    REMOVE,
    CHANGE_BETSLIP_STATUS
} from '../actions'

export default function betslipReducer (state = { status: 'false', data: {} }, action) {
    switch (action.type) {
        case ADD_TO_BETSLIP :
            let obj = {};
            obj[action.marketId] = action.selectionId;
            return {...state, data:{...state.data, ...obj}, status: "true"};

        case REMOVE :
            delete state.data[action.marketId];
            return {...state, data:{...state.data}};

        case CHANGE_BETSLIP_STATUS:
            return {...state, status: action.status};
        default :
            return state
    }
}