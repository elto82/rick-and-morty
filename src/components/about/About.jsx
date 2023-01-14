import React from "react";
import s from "./About.module.css";

const About = () => {
  return (
    <div className={s.aboutContainer}>
      <h1>Sobre mí</h1>
      <div className={s.aboutInfo}>
        <img src="./foto.jpg" alt="i am" className={s.profilePic} />
        <div className={s.aboutText}>
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
