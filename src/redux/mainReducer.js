import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth3615Reducer from '../features/EmailAuth3615/redux/reducers';
import EmailAuth3614Reducer from '../features/EmailAuth3614/redux/reducers';
import EmailAuth3612Reducer from '../features/EmailAuth3612/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth3615: EmailAuth3615Reducer,
EmailAuth3614: EmailAuth3614Reducer,
EmailAuth3612: EmailAuth3612Reducer,
EmailAuth: EmailAuthReducer,

});