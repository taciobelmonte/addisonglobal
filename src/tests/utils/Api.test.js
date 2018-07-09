import * as Api from './../../utils/Api'

describe('Testing fetch api', () => {

    beforeEach(() => {
        fetch.resetMocks()
    });

    it('calls google and returns data to me', () => {
        fetch.mockResponseOnce(JSON.stringify([]));

        //assert on the response
        Api.getData().then(res => {
            expect(res).toEqual([])
        });

        //assert on the times called and arguments given to fetch
        expect(fetch.mock.calls[0][0]).toEqual('http://www.mocky.io/v2/59f08692310000b4130e9f71');
    })

});
