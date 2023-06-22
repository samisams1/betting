import { applyMiddleware, compose, createStore } from "redux";
import { createLogger } from "redux-logger";
import { persistReducer } from "redux-persist";
import { autoMergeLevel2 } from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import ReduxThunk from "redux-thunk";
import apiRest from "../middleware/apiRest";
import storage from "redux-persist/lib/storage";
import rootReducer from "./reducers";

const persistConfig = {
  key: "betAssist",
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ["data", "nextGameweek"],
  blacklist: []
};

const middleware = [ReduxThunk, apiRest];

if (process.env.NODE_ENV === "development") {
  const logger = createLogger({
    collapsed: true,
    duration: true
  });
  middleware.push(logger);
}

const defaultState = {};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  persistedReducer,
  defaultState,
  composeEnhancers(applyMiddleware(...middleware))
);
