import * as Api from './../utils/Api';

export const FETCH_EVENTS = 'FETCH_EVENTS';

export function fetchEvents() {
    return dispatch => {
        Api.getData()
            .then(res => dispatch(fetchEventsSuccess(res)))
    }
}

export function fetchEventsSuccess(data) {
    if(data !== undefined){
        return {
            type: FETCH_EVENTS,
            payload: data,
        }
    }
    return false;
}