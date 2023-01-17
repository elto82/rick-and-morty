const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const validate = (values) => {
  let errors = {};
  if (!values.username) {
    errors.username = "El nombre de usuario no puede estar vacío.";
  } else if (!emailRegex.test(values.username)) {
    errors.username = "El nombre de usuario debe ser un email válido.";
  } else if (values.username.length > 35) {
    errors.username =
      "El nombre de usuario no puede tener más de 35 caracteres.";
  }

  if (!values.password) {
    errors.password = "La contraseña no puede estar vacía.";
  } else if (!/\d/.test(values.password)) {
    errors.password = "La contraseña debe tener al menos un número.";
  } else if (values.password.length < 6 || values.password.length > 10) {
    errors.password = "La contraseña debe tener entre 6 y 10 caracteres.";
  }

  return errors;
};

export default validate;
