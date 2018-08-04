import { fork, all } from 'redux-saga/effects';
import adminSaga from './containers/admin/sagas';

export default function* rootSaga() {
    return yield all([
        fork(adminSaga)
    ]);
}
