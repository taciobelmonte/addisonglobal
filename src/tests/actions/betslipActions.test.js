import {changeBetslipStatus, add, remove, ADD_TO_BETSLIP, CHANGE_BETSLIP_STATUS, REMOVE_FROM_BETSLIP  } from './../../actions'

describe('>>>ACTION --- Test changeBetslipStatus',()=> {
    it('+++ actionCreator changeBetslipStatus', () => {
        expect(changeBetslipStatus("")).toEqual({type: CHANGE_BETSLIP_STATUS, status: ""})
    });

    it('+++ actionCreator changeBetslipStatus', () => {
        expect(changeBetslipStatus("true")).toEqual({type: CHANGE_BETSLIP_STATUS, status: "true"})
    });

    it('+++ actionCreator changeBetslipStatus', () => {
        expect(changeBetslipStatus("false")).toEqual({type: CHANGE_BETSLIP_STATUS, status: "false"})
    });
});

describe('>>>ACTION --- Test add',()=> {
    it('+++ actionCreator add', () => {
        expect(add("SEL_1", "MKT_1")).toEqual({type: ADD_TO_BETSLIP, selectionId: "SEL_1", marketId: "MKT_1"})
    });

    it('+++ actionCreator add', () => {
        expect(add("", "")).toEqual({type: ADD_TO_BETSLIP, selectionId: "", marketId: ""})
    });
});

describe('>>>ACTION --- Test remove',()=> {
    it('+++ actionCreator remove', () => {
        expect(remove("MKT_1")).toEqual({type: REMOVE_FROM_BETSLIP, marketId: "MKT_1"})
    });

    it('+++ actionCreator add', () => {
        expect(remove("")).toEqual({type: REMOVE_FROM_BETSLIP, marketId: ""})
    });
});