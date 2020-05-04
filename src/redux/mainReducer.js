import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth3613Reducer from '../features/EmailAuth3613/redux/reducers';
import EmailAuth3612Reducer from '../features/EmailAuth3612/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth3613: EmailAuth3613Reducer,
EmailAuth3612: EmailAuth3612Reducer,
EmailAuth: EmailAuthReducer,

});