import React, { useState } from "react";
import { authHandler } from "../../api/auth";
import authAction from "../../constants/authAction";
import { useAuthContext } from "../../context/AuthContextProvider";
import { LogInAction } from "../../context/actions";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routeBox";
import { RotateLoader } from "react-spinners";
const SignInForm = () => {
  const { dispatch } = useAuthContext();
  const [info, setInfo] = useState({
    userName: "",
    password: "",
    error: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    authHandler(authAction.signIn, info)
      .then((data) => {
        dispatch(LogInAction(data));
        navigate(routes.home);
      })
      .catch((err) => {
        setInfo((prev) => ({
          ...prev,
          error: err.message,
        }));
      })
      .finally(() => setIsLoading(false));
  };

  const changeFunc = (e) => {
    setInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        onSubmit={submitHandler}
        style={{
          maxWidth: 400,
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <label>UserName or Email</label>
          <input type="text" name="userName" onChange={changeFunc} />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <label>password</label>
          <input type="password" name="password" onChange={changeFunc} />
        </div>
        <button type="submit" style={{
          backgroundColor:'black',
          color:'red',
          fontSize:25,
          fontWeight:'bold',
          padding:'10px 25px',
          marginTop:25,
          borderRadius:25
        }}>Submit</button>
        {isLoading && <RotateLoader color="red" />}
      </form>
    </div>
  );
};

export default SignInForm;
