import {
    FETCH_EVENTS,
} from '../actions'

export default function eventsReducer (state = {}, action) {
    switch (action.type) {
        case FETCH_EVENTS :
            const entry = {};

            action.payload.map((event) => {

                //Filter markets array to only id
                const markets = [];

                event.markets.map((market) => markets.push(market.id));
                event.markets = markets;

                if(event.markets.length > 0)
                    entry[event.id] = event;

                return true;
            });

            return {...state, ...entry};
        default :
            return state
    }
}