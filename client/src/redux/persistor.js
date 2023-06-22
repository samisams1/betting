import { persistStore } from "redux-persist";
import store from "./store";

// Load initial data from somewhere....
const loadInitialData = () => {};

const persistorConfig = {};

export const persistor = persistStore(store, persistorConfig, loadInitialData);
