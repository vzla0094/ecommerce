import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger"; //middleware which help us debug

import rootReducer from "./root-reducer"; //this is actually persistReducer(persistConfig, rootReducer), that's what was exported as default

const middlewares = [];

if(process.env.NODE_ENV === 'development'){
  middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);

export default { store, persistor };
