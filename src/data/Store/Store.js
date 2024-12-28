import { applyMiddleware, configureStore, createStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import { reducers } from "../Reducers/ReducersCombind";
import { thunk } from "redux-thunk";


export const makeStore = () => {
  return configureStore({
    reducer: reducers
  })
}



