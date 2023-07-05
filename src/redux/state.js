import levkov from "../static/gleb.jpeg"
import vasilkov from "../static/egor.jpeg"
import profileLogo from "../static/profile.png"
import profileReducer from "./profile-reducer"
import dialogsReducer from "./dialogs-reducer"

let store = {
    _state: {
        user_id: 669,
        profile_data: {
            profile_info: {
                name: "Vladimir Moshchuk",
                date: "04.03.2004",
                city: "Minsk",
                education: "BSUIR'25"
            },
            posts: [{ name: "Gleb Levkov", message: "Wtf?", date: "23.06.2023", profileIcon: levkov }],
            new_post_message: ""
        },
        dialog_data: {
            user_id: 669,
            dialogs: [
                { id: 115, name: "Gleb Levkov", avatar: levkov },
                { id: 228, name: "Egor Vasilkov", avatar: vasilkov },
                { id: 453, name: "Dmitry Cringeman", avatar: profileLogo },
            ],
            messagies: [
                { id: 115, message: "Hi, how are u?" },
                { id: 669, message: "I'm fine! Thanks!" },
                { id: 115, message: "What are u think about training in cs:go?" },
                { id: 669, message: "Let`s go!" },
            ],
            new_message: ""
        }
    },
    _callSubscriber() {
        console.log("state was changed")
    },

    
    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profile_data = profileReducer(this._state.profile_data, action);
        this._state.dialog_data = dialogsReducer(this._state.dialog_data, action);
        this._callSubscriber()
    }
}


export default store
window.store = store
