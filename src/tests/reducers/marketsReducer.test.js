import marketsReducer  from './../../reducers/marketsReducer'
import {FETCH_MARKETS} from './../../actions'

describe('>>>REDUCER --- Test marketsReducer',()=> {

    it('runs undefined and gets initial state', () => {
        expect(marketsReducer(undefined, {})).toEqual({});
    });

    it('Sets up fetched', () => {

        // given
        const beforeState = {};
        const action = {type: FETCH_MARKETS, payload: []};

        // when
        const afterState = marketsReducer(beforeState, action);

        // then
        expect(afterState).toEqual({});
    });

});
