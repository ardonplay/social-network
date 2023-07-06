import { combineReducers, configureStore} from "@reduxjs/toolkit";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer"
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profile_data: profileReducer,
    dialog_data: dialogsReducer,
    users_data: usersReducer
});

let store = configureStore({reducer: reducers })

export default store; 