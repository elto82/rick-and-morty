import React from "react";
import s from "./Error.module.css";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div className={s.errorContainer}>
      <div className="errorContainer">
        <h1>Error 404</h1>
        <p>Lo sentimos, la página que buscas no se encuentra.</p>
      </div>
      <div>
        <Link to="/home">
          <button className={s.buttonBack}>To Home</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
