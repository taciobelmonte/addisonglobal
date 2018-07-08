import * as Api from './../utils/Api';

export const FETCH_SELECTIONS = 'FETCH_SELECTIONS';

export function fetchSelections() {
    return dispatch => {
        Api.getData()
            .then(res => dispatch(fetchSelectionsSuccess(res)))
    }
}

function fetchSelectionsSuccess(data) {
    return {
        type: FETCH_SELECTIONS,
        payload: data.filter((item) => item.markets.length > 0),
    }
}