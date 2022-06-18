// @packages
import configureMockStore from 'redux-mock-store';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';
import thunk from 'redux-thunk';
import { configureStore, Store } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

// @scripts
import reducer from './reducers';
import { config } from '../config';
import {
  getStorage,
  saveState
} from '../util';

/**
 * @param {store} store - The redux store.
 */
const configureLocalStorage = (store : any) => {
  if (config.settings.localStorage.isEnabled) {
    const saveStateOnStorage = () => {
      const state = store.getState();
      saveState({
        getStorage,
        device: config.settings.localStorage.device,
        key: config.settings.localStorage.key,
        state
      } as any);
    };

    store.subscribe(
      throttle(saveStateOnStorage),
      config.settings.localStorage.throttleWait
    );
  }
};

/**
 * @param {{isUnitTest: boolean}} environment
 * @returns {store}
 */
export const initializeReduxWrapperStore = (environment : any) => {
  const middleware = [thunk, logger];
  let store : Store;

  if (environment.isUnitTest) {
    store = configureMockStore(middleware)(config.initialState);
  } else {
    store = configureStore({
      reducer,
      middleware
    });
  }

  const wrapperStore = createWrapper<Store<any>>(() => store);
  configureLocalStorage(store);
  return { store, wrapperStore };
};
