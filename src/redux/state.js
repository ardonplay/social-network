import levkov from "../static/gleb.jpeg"
import vasilkov from "../static/egor.jpeg"
import profileLogo from "../static/profile.png"
const ADD_POST = "ADD-POST"
const UPDATE_POST_TEXT = "UPDATE-POST-TEXT"
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
            ]
        }
    },
    _callSubscriber() {
        console.log("state was changed")
    },

    _addPost() {
        let newPost = {
            date: "23.06.2023",
            message: this._state.profile_data.new_post_message,
            name: "Gleb LEvkov",
            profileIcon: levkov
        }
        this._state.profile_data.posts.push(newPost)
        this._updateNewPostText("")
        this._callSubscriber()
    },
    _updateNewPostText(postMessage) {
        console.log(this._state.profile_data)
        this._state.profile_data.new_post_message = postMessage;
        this._callSubscriber()
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    dispatch(action) {
        switch (action.type) {
            case ADD_POST:
                this._addPost()
            case UPDATE_POST_TEXT:
                this._updateNewPostText(action.message)
        }
    }
}



export const addPostActionCreator = () => ({ type: ADD_POST })

export const updatePostTextActionCreator = (message) =>
    ({ type: UPDATE_POST_TEXT, message: message })

export default store
window.store = store
