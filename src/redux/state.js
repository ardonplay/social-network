import levkov from "../static/gleb.jpeg"
import vasilkov from "../static/egor.jpeg"
import profileLogo from "../static/profile.png"
import { renderEntireTree } from "../render"

let state = {
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
  }

  export let addPost = () => {
    let newPost = {
        date: "23.06.2023",
        message: state.profile_data.new_post_message,
        name: "Gleb LEvkov",
        profileIcon: levkov 
    }
    state.profile_data.posts.push(newPost);
    updateNewPostText("")
    renderEntireTree(state)
  }

  export let updateNewPostText = (postMessage) => {
    state.profile_data.new_post_message = postMessage;
    renderEntireTree(state)
  }
  export default state