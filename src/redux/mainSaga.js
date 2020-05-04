import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth3613Saga from '../features/EmailAuth3613/redux/sagas';
import EmailAuth3612Saga from '../features/EmailAuth3612/redux/sagas';
import EmailAuthSaga from '../features/EmailAuth/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth3613Saga,
EmailAuth3612Saga,
EmailAuthSaga,
    
  ]);
}