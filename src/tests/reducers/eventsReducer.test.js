import eventsReducer  from './../../reducers/eventsReducer'
import {FETCH_EVENTS} from './../../actions'

describe('>>>REDUCER --- Test eventsReducer',()=> {

    it('runs undefined and gets initial state', () => {
        expect(eventsReducer(undefined, {})).toEqual({});
    });

    it('Sets up fetched', () => {

        // given
        const beforeState = {};
        const action = {type: FETCH_EVENTS, payload: []};

        // when
        const afterState = eventsReducer(beforeState, action);

        // then
        expect(afterState).toEqual({});
    });

});
