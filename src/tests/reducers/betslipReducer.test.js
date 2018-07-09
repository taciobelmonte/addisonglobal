import betslipReducer  from './../../reducers/betslipReducer'
import { ADD_TO_BETSLIP, REMOVE_FROM_BETSLIP, CHANGE_BETSLIP_STATUS} from './../../actions'

describe('>>>REDUCER --- Test betslipReducer',()=> {

    it('runs undefined and gets initial state', () => {
        expect(betslipReducer(undefined, {})).toEqual({ status: 'false', data: {} });
    });

    it('Sets up ADD TO BETSLIP', () => {
        const beforeState = {};
        const action = {type: ADD_TO_BETSLIP, selectionId: '', marketId: ''};
        const afterState = betslipReducer(beforeState, action);
        expect(afterState).toEqual({ status: "false", data: {} });
    });

    it('Sets up ADD TO BETSLIP - Testing when having only one pair key=>data in the object', () => {
        const beforeState = {};
        const action = {type: ADD_TO_BETSLIP, selectionId: 'SEL_1', marketId: 'MKT_1'};
        const afterState = betslipReducer(beforeState, action);
        expect(afterState).toEqual({ status: "true", data: {MKT_1: "SEL_1"} });
    });

    it('Sets up ADD TO BETSLIP - Testing when already have data inside the data attribute in betslip', () => {
        const beforeState = { status: "true", data: {MKT_1: "SEL_1"}};
        const action = {type: ADD_TO_BETSLIP, selectionId: 'SEL_2', marketId: 'MKT_2'};
        const afterState = betslipReducer(beforeState, action);
        expect(afterState).toEqual({ status: "true", data: {MKT_1: "SEL_1", MKT_2: "SEL_2"} });
    });

    it('Sets up REMOVE_FROM_BETSLIP', () => {
        const beforeState = {};
        const action = {type: REMOVE_FROM_BETSLIP, marketId: ''};
        const afterState = betslipReducer(beforeState, action);
        expect(afterState).toEqual({ status: "false", data: {} });
    });

    it('REMOVE_FROM_BETSLIP with data already in state', () => {
        const beforeState = { status: "true", data: {MKT_1: "SEL_1", MKT_2: "SEL_2"} };
        const action = {type: REMOVE_FROM_BETSLIP, marketId: 'MKT_1'};
        const afterState = betslipReducer(beforeState, action);
        expect(afterState).toEqual({ status: "true", data: {MKT_2: "SEL_2"} });
    });

    it('CHANGE_BETSLIP_STATUS when no data loaded', () => {
        const beforeState = { status: "false", data: {} };
        const action = {type: CHANGE_BETSLIP_STATUS, status: ''};
        const afterState = betslipReducer(beforeState, action);
        expect(afterState).toEqual({ status: "false", data: {} });
    });

    it('CHANGE_BETSLIP_STATUS when status is true and no data loaded', () => {
        const beforeState = { status: "true", data: {} };
        const action = {type: CHANGE_BETSLIP_STATUS, status: ''};
        const afterState = betslipReducer(beforeState, action);
        expect(afterState).toEqual({ status: "false", data: {} });
    });

    it('CHANGE_BETSLIP_STATUS when status is true and  false is passed', () => {
        const beforeState = { status: "true", data: {} };
        const action = {type: CHANGE_BETSLIP_STATUS, status: 'false'};
        const afterState = betslipReducer(beforeState, action);
        expect(afterState).toEqual({ status: "false", data: {} });
    });

    it('CHANGE_BETSLIP_STATUS when status is false and  true is passed', () => {
        const beforeState = { status: "false", data: {} };
        const action = {type: CHANGE_BETSLIP_STATUS, status: 'true'};
        const afterState = betslipReducer(beforeState, action);
        expect(afterState).toEqual({ status: "true", data: {} });
    });

});
