import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import users from "../api/users";
import { BiUpload } from "react-icons/bi";

import logo from "../imgs/economiphones-logo.svg";

const Navbar = (props) => {
  const user = useSelector((state) => state.user);

  const logoutHandler = () => {
    users
      .get("/logout", {
        withCredentials: true,
        credentials: "include",
      })
      .then((response) => {
        if (response.status === 200) {
          props.history.push("/");
        } else {
          alert("Log Out Failed");
        }
      });
  };

  return (
    <div className="navbar">
      <Link className="navbar__logo-box" to="/">
        <img className="navbar__logo" src={logo} alt="" />
      </Link>
      <div className="navbar__right">
        {user.userData && !user.userData.isAuth ? (
          <>
            <Link className="navbar__link" to="/ingresar">
              Ingresar
            </Link>
            <Link className="navbar__link" to="/registrar">
              Registrarse
            </Link>
          </>
        ) : (
          <>
            <Link className="navbar__link" to="/editar-producto">
              <BiUpload size={24} />
            </Link>
            <Link className="navbar__link" to="/carrito">
              Carrito ({user.userData && user.userData.cart.length})
            </Link>
            <div onClick={logoutHandler}>Cerrar sesión</div>
          </>
        )}
      </div>
    </div>
  );
};

export default withRouter(Navbar);
