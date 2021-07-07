import { call, put } from "redux-saga/effects";
import { setCat } from "../../reducers/catsReducer"
import { requestGetCat } from "../requests/requestGetCat"

export function* handleGetCat(action) {
    try {
      const response = yield call(requestGetCat);
      const { data } = response;
      yield put(setCat(data));
    } catch (error) {
      console.log(error);
    }
  }
  