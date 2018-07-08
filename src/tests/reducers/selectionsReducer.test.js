import selectionsReducer  from './../../reducers/marketsReducer'
import {FETCH_SELECTIONS} from './../../actions'

describe('>>>REDUCER --- Test selectionsReducer',()=> {

    it('runs undefined and gets initial state', () => {
        expect(selectionsReducer(undefined, {})).toEqual({});
    });

    it('Sets up fetched', () => {

        // given
        const beforeState = {};
        const action = {type: FETCH_SELECTIONS, payload: []};

        // when
        const afterState = selectionsReducer(beforeState, action);

        // then
        expect(afterState).toEqual({});
    });

});
