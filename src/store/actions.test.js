import * as actions from './actions';
import * as TYPES from './types';

describe('actions', () => {
    describe('createAdvertSuccess', () => {
        test('should create advert actions', () => {
            const advert = {
                name: 'Prueba',
                type: 'buy',
                tags: 'motor',
                price: 10,
                description: 'created new advert',
                photo: 'prueba.jpg',
            };    
            const expectedAction = {
                type: TYPES.CREATE_ADVERT_SUCCESS,
                advert,
            };
            expect(actions.createAdvertSuccess(advert)).toEqual(
                expectedAction
            );
        });
    
        test('should dispatch and FETCH_ADVERTS_REQUEST action', () => {
            const action = actions.fetchAdverts();
            const dispatch = jest.fn();
            const getState = () => {};
            const NodepopAPI = {
                getAdverts: jest.fn(),
            };
            
            action(dispatch, getState);

            expect(dispatch).toHaveBeenCalledWith({
                type: TYPES.FETCH_ADVERTS_REQUEST,
            });
        });
    });    
});

