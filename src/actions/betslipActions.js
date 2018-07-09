export const ADD_TO_BETSLIP = 'ADD_TO_BETSLIP';
export const CHANGE_BETSLIP_STATUS = 'CHANGE_BETSLIP_STATUS';
export const REMOVE_FROM_BETSLIP = 'REMOVE_FROM_BETSLIP';

export function changeBetslipStatus(status){
    return {
        type: CHANGE_BETSLIP_STATUS,
        status: status
    }
}

export function add(selectionId, marketId) {
    return {
        type: ADD_TO_BETSLIP,
        selectionId: selectionId,
        marketId: marketId
    }
}

export function remove(marketId) {
    return {
        type: REMOVE_FROM_BETSLIP,
        marketId: marketId
    }
}