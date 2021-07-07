import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import catsReducer from "./reducers/catsReducer";

import { watcherSaga } from "./sagas/rootSaga";


const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware];

const store = createStore(catsReducer, {}, applyMiddleware(...middleware));

sagaMiddleware.run(watcherSaga);

export default store;