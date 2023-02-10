import React from "react";
import { useState } from "react";
import validate from "./validation";
import s from "./Form.module.css";

const Form = ({ login }) => {
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors(
      validate({
        ...userData,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  return (
    <div className={s.container}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          className={errors.username && s.warning}
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p className={s.danger}>{errors.username}</p>

        <br />
        <label htmlFor="password">Password:</label>
        <input
          className={errors.password && s.warning}
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p className={s.danger}>{errors.password}</p>

        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Form;
