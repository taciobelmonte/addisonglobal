import {
    ADD_TO_BETSLIP,
    REMOVE_FROM_BETSLIP,
    CHANGE_BETSLIP_STATUS
} from '../actions'

export default function betslipReducer (state = { status: 'false', data: {} }, action) {
    switch (action.type) {
        case ADD_TO_BETSLIP :
            let obj = {};

            //Handles when data is empty
            if(action.marketId !== '' && action.selectionId !== ''){
                obj[action.marketId] = action.selectionId;
                return {...state, data:{...state.data, ...obj}, status: "true"};
            }

            return {...state, data: {}, status: "false"};

        case REMOVE_FROM_BETSLIP :

            if(action.marketId !== ''){
                delete state.data[action.marketId];
                return {...state, data:{...state.data}};
            }

            return {...state, data: {}, status: "false"};

        case CHANGE_BETSLIP_STATUS:

            if(action.status !== '')
                return {...state, status: action.status};
            return {...state, status: "false"};


        default :
            return state
    }
}