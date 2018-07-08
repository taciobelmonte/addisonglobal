import {
    FETCH_SELECTIONS,
} from '../actions'

export default function selectionsReducer (state = {}, action) {
    switch (action.type) {
        case FETCH_SELECTIONS :

            const entry = {};
            action.payload.map((event) => {

                //Get markets array from event object
                event.markets.map((market) => {

                    //Iterates over selections inside market object
                    market.selections.map((selection) => {
                        entry[selection.id] = {
                            status: 'disabled',
                            ...selection
                        };
                        return true;
                    });
                    return true;
                });
                return true;
            });
            return {...state, ...entry};
        default :
            return state
    }
}
