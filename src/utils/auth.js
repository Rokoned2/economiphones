import React, { useEffect } from "react";
import { auth } from "../redux/actions/user_actions";
import { useSelector, useDispatch } from "react-redux";

const Auth = (ComposedClass, reload, adminRoute = null) => {
  function AuthenticationCheck(props) {
    let user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(auth()).then((response) => {
        console.log("response", response);
        if (!response.payload.isAuth) {
          if (reload) {
            props.history.push("/login");
          }
        } else {
          console.log("yesp", adminRoute);
          if (adminRoute && response.payload.role !== "admin") {
            props.history.push("/");
          } else {
            if (reload === false) {
              props.history.push("/");
            }
          }
        }
      });
    }, [dispatch, props.history]);

    return <ComposedClass {...props} user={user} />;
  }
  return AuthenticationCheck;
};
export default Auth;
