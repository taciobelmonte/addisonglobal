import * as Api from './../utils/Api';

export const FETCH_MARKETS = 'FETCH_MARKETS';

export function fetchMarkets() {
    return dispatch => {
        Api.getData()
            .then(res => dispatch(fetchMarketsSuccess(res)))
    }
}

function fetchMarketsSuccess(data) {
    return {
        type: FETCH_MARKETS,
        payload: data.filter((item) => item.markets.length > 0),
    }
}