import React from "react";
import preloader from "../../static/loading.gif";

const Preloader = (props) => {
  return (
    <div>
      <img src={preloader} alt="loading" />
    </div>
  );
};

export default Preloader;
