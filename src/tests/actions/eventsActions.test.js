import {fetchEventsSuccess, FETCH_EVENTS } from './../../actions'

describe('>>>ACTION --- Test fetchEventsSuccess',()=> {
    it('+++ actionCreator fetchEventsSuccess', () => {
        expect(fetchEventsSuccess([])).toEqual({type: FETCH_EVENTS, payload: []})
    });
});
