// @packages
import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

// @scripts
import globalText from 'store/slices/dictionary';

const combinedReducer = combineReducers({ globalText });

const rootReducer = (state : any, action : any) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combinedReducer(state, action);
};

export type RootState = ReturnType<typeof combinedReducer>

export default rootReducer;
