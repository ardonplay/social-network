import React from "react";
import s from "./Backgroud.module.css"
import videoBg from "../../static/background.webm"

const Backgroud = () => {
    return ( 
    <video className={s.video} src={videoBg} autoPlay loop muted/>);
}

export default Backgroud;
