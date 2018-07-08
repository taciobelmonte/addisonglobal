export const ADD_TO_BETSLIP = 'ADD_TO_BETSLIP';
export const CHANGE_BETSLIP_STATUS = 'CHANGE_BETSLIP_STATUS';
export const REMOVE = 'REMOVE';

export function changeBetslipStatus(status){
    return {
        type: CHANGE_BETSLIP_STATUS,
    }
}

export function add(selectionId, marketId) {
    return {
        type: ADD_TO_BETSLIP,
        selectionId: selectionId,
        marketId: marketId
    }
}

export function remove(selectionId, marketId) {
    return {
        type: REMOVE,
        selectionId: selectionId,
        marketId: marketId
    }
}