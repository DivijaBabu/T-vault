import { configureStore } from '@reduxjs/toolkit';
import {createStore} from "redux";
import Reducers from "../Reducers/reducers";
export default function configureStore(initialState) {
    return createStore(rootReducer, initialState);
}