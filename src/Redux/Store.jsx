import { legacy_createStore,applyMiddleware } from "redux";

import myreducer from "./Reducer";
import logger from "redux-logger";

const mystore = legacy_createStore(myreducer,applyMiddleware(logger));
export default mystore;