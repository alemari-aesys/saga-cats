import { takeLatest } from "redux-saga/effects";
import { handleGetCat } from "./handlers/handleGetCat";
import { GET_CAT } from "../reducers/catsReducer";

export function* watcherSaga() {
  yield takeLatest(GET_CAT, handleGetCat);
}
