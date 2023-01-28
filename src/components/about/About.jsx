import React from "react";
import "./About.css";
import mainImage from "./foto.jpg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="aboutContainer">
      <button onClick={() => navigate("/home")}>Home</button>

      <div className="aboutInfo">
        <div>
          <h1>Sobre mí</h1>
          <img src={mainImage} alt="i am" />
        </div>
        <div className="aboutText">
          <p>
            Hola, mi nombre es <strong>Argiro</strong> y soy el creador de esta
            aplicación.
          </p>
          <p>
            Tengo experiencia en desarrollo web y amo trabajar con React. Me
            inspiró crear esta aplicación para compartir mi amor por la serie de
            televisión Rick y Morty con otros fanáticos.
          </p>
          <p>
            Espero que disfrutes utilizando esta aplicación y si tienes alguna
            sugerencia o comentario, no dudes en contactarme.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
