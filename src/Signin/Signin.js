import React from "react";
import { useForm } from "react-hook-form";
import api from "../api";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/actions/user_actions";
import { getCookie } from "react-use-cookie";

const Signin = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();

  const submitProduct = (data) => {
    const { email, password } = data;
    console.log("data", data);

    if (!email || !password) {
      return alert("fill all the fields first!");
    }

    dispatch(loginUser(data)).then((response) => {
      if (response.payload.loginSuccess) {
        window.localStorage.setItem("userId", response.payload.userId);
        props.history.push("/");
      } else {
        alert("bad shit");
      }
    });
  };

  const token = getCookie("w_auth");
  console.log("token", token);

  return (
    <div className="auth">
      <h1 className="u-center-text">Ingresar</h1>
      <form className="form" onSubmit={handleSubmit(submitProduct)}>
        <div className="form__group">
          <label>Correo electrónico</label>
          <input
            className="form__input"
            {...register("email", { required: true })}
            type="email"
          />
        </div>

        <div className="form__group">
          <label>Contraseña</label>
          <input
            className="form__input"
            {...register("password", { required: true })}
            type="password"
          />
        </div>

        <button className="btn" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Signin;
