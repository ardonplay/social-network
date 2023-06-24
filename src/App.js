import './App.css';
import Header from './components/Header/Header';
import Navbar from "./components/Navbar/Navbar"
import Profile from "./components/Profile/Profile"
import Backgroud from './components/Backgroud/Backgroud';
import { Route, Navigate, BrowserRouter, Routes } from "react-router-dom"
import Dialogs from './components/Dialogs/Dialogs';

function App(props) {
  let state = props.state;
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <Navigate to="/profile" />
            }
          />
        </Routes>

        <Backgroud />
        <Header />
        <div className="flex flex-row text-red-50 rounded-lg m-5 bg-gradient-to-b from-[#1e3b8ac5] to-[#1e3b8a3f] border-[1px] border-solid border-white border-opacity-20  shadow-[rgba(0,0,0,0.30)] shadow-xl">
          <Navbar />
          <Routes>
            <Route path="/profile" element={<Profile profile_data={state.profile_data} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>} />
            <Route path="/messagies" element={<Dialogs  dialog_data={state.dialog_data} />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
