import React from "react";
import { useForm } from "react-hook-form";
import api from "../api";
import { registerUser } from "../redux/actions/user_actions";
import { useDispatch } from "react-redux";

const Signup = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const submitProduct = (data) => {
    const { name, email, password } = data;
    console.log("data", data);

    if (!name || !email || !password) {
      return alert("fill all the fields first!");
    }

    dispatch(registerUser(data)).then((response) => {
      if (response.payload.success) {
        props.history.push("/register");
      } else {
        alert(response.payload.err.errmsg);
      }
    });
  };

  return (
    <div className="auth">
      <h1 className="u-center-text">Registrarse</h1>
      <form className="form" onSubmit={handleSubmit(submitProduct)}>
        <div className="form__group">
          <label className="form__label">Nombre</label>
          <input
            className="form__input"
            {...register("name", { required: true })}
            type="text"
          />
        </div>
        <div className="form__group">
          <label className="form__label">Correo electrónico</label>
          <input
            className="form__input"
            {...register("email", { required: true })}
            type="email"
          />
        </div>

        <div className="form__group">
          <label className="form__label">Contraseña</label>
          <input
            className="form__input"
            {...register("password", { required: true })}
            type="password"
          />
        </div>

        <button className="btn" type="submit">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default Signup;
