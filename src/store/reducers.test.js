import * as reducers from './reducers';
import * as TYPES from './types';


describe('reducers', () => {
    describe('adverts', () => {
        test('should handle a FETCH_ADVERTS_SUCCESS action', () => {
            const initialState = [];
            const adverts = [{name:'prueba', price:5, tags:'motor', description:'jghghg', photo:'prueba.jgp'}];
                const action = {
                    type: TYPES.FETCH_ADVERTS_SUCCESS,
                    adverts,
            };
            const expectedState = adverts;
            expect(reducers.adverts(initialState, action)).toEqual(expectedState);
        });
    });
});