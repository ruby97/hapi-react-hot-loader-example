
import React from 'react';
import {Provider} from 'react-redux';
import {shallow, mount, render} from 'enzyme';
import Contact from '../../src/views/Contact';
import configureStore from 'redux-mock-store';
import MetaAction from '../../src/store/meta/MetaAction';

describe('views/Contact', () => {
    const initialState = {};
    const mockStore = configureStore();
    let store;
    let wrapper;
    let component;

    beforeEach(() => {
        store = mockStore(initialState);
        wrapper = mount(
            <Provider store={store}>
                <Contact />
            </Provider>
        );

        component = wrapper.find(Contact).first();
    });
    // https://github.com/tylercollier/redux-form-test
    it('should match mapStateToProps', () => {
        // TODO: how to test mapStateToProps
    });

    it('should test redux form', () => {
        // TODO: how to test redux-form
    });

    it('should call setMeta action', () => {
        const actions = store.getActions();
        const actual = actions[1];
        const expected = {
            type: MetaAction.SET_META,
            payload: {
                title: 'Contact Page',
            },
        };

        expect(actual).toEqual(expected);
    });

    it('should call X number of actions', () => {
        const actions = store.getActions();
        const actual = actions.length;
        const expected = 10;

        expect(actual).toBe(expected);
    });

});