import { combineReducers, configureStore, createStore } from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer"

let reducers = combineReducers({
    profile_data: profileReducer,
    dialog_data: dialogsReducer
});

let store = configureStore({reducer: {
    profile_data: profileReducer,
    dialog_data: dialogsReducer
} })

export default store;