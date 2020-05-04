import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth3621Saga from '../features/EmailAuth3621/redux/sagas';
import EmailAuth3620Saga from '../features/EmailAuth3620/redux/sagas';
import EmailAuth3618Saga from '../features/EmailAuth3618/redux/sagas';
import EmailAuth3616Saga from '../features/EmailAuth3616/redux/sagas';
import EmailAuth3614Saga from '../features/EmailAuth3614/redux/sagas';
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
EmailAuth3621Saga,
EmailAuth3620Saga,
EmailAuth3618Saga,
EmailAuth3616Saga,
EmailAuth3614Saga,
EmailAuth3612Saga,
EmailAuthSaga,
    
  ]);
}