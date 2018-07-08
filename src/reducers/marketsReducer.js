import {
    FETCH_MARKETS,
} from '../actions'

export default function marketsReducer (state = {}, action) {
    switch (action.type) {
        case FETCH_MARKETS :
            const entry = {};

            //Iterates over events
            action.payload.map((event) => {

                if(event.markets.length > 0){

                    //Iterates over markets inside events
                    event.markets.map((market) => {

                        //Filter markets array to only id
                        const selections = [];

                        market.selections.map((selection) => selections.push(selection.id));
                        market.selections = selections;

                        //Add market to an object
                        entry[market.id] = {
                            id: market.id,
                            name: "to ".concat(market.name.replace("Team to", "").replace("Player to", "").toUpperCase()),
                            selections: market.selections
                        };

                        return true;
                    });

                }
                return true;
            });
            //Return object
            return {...state, ...entry};
        default :
            return state
    }
}