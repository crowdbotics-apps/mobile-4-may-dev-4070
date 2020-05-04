import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth3618Reducer from '../features/EmailAuth3618/redux/reducers';
import EmailAuth3616Reducer from '../features/EmailAuth3616/redux/reducers';
import EmailAuth3614Reducer from '../features/EmailAuth3614/redux/reducers';
import EmailAuth3612Reducer from '../features/EmailAuth3612/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth3618: EmailAuth3618Reducer,
EmailAuth3616: EmailAuth3616Reducer,
EmailAuth3614: EmailAuth3614Reducer,
EmailAuth3612: EmailAuth3612Reducer,
EmailAuth: EmailAuthReducer,

});