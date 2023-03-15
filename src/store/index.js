import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import countReducer from "./countReducer";
import userReducer from "./userReducer";
import createSagaMiddleware from "@redux-saga/core";
import { rootWatcher } from "../saga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    countReducer,
    userReducer
})

export const store = configureStore({reducer: rootReducer, middleware: [sagaMiddleware]})

sagaMiddleware.run(rootWatcher);