import React from "react";
import { useAuthContext } from "../context/AuthContextProvider";
import { Link } from "react-router-dom";
import routes from "../constants/routeBox";
const AuthGuard = ({ children }) => {
  const { state } = useAuthContext();

  return (
    <>
      {state.isAuthenticated ? (
        children
      ) : (
        <div>
          <h1 style={{ color: "red", fontSize: 35, fontWeight: "bold" }}>
            You are not Autenticated
          </h1>
          <h4 style={{ color: "green", fontSize: 25 }}>
            Please sign in or sign up
          </h4>
          <button
            style={{
              padding: "10px 25px",
              borderRadius: 25,
              backgroundColor: "red",
              marginRight: 20,
            }}
          >
            <Link
              style={{ color: "white", fontSize: 25, textDecoration: "none" }}
              to={routes.SignIn}
            >
              Sing In
            </Link>
          </button>
          <button
            style={{
              padding: "10px 25px",
              borderRadius: 25,
              backgroundColor: "green",
            }}
          >
            <Link
              style={{ color: "white", fontSize: 25, textDecoration: "none" }}
              to={routes.signUp}
            >
              Sign UP
            </Link>
          </button>
        </div>
      )}
    </>
  );
};

export default AuthGuard;
