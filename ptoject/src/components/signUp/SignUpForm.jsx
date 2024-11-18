import React, { useState } from "react";
import { authHandler } from "../../api/auth";
import authAction from "../../constants/authAction";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routeBox";
import { ScaleLoader } from "react-spinners";
const SignUpForm = () => {
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);
    authHandler(authAction.signUp, user)
      .then(() => navigate(routes.SignIn, { state: { success: true } }))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  };

  const changeFunc = (e) => {
    setUser((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <div style={{
      width:'100%',
      height:'100%',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    }}>
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
          <label>UserName</label>
          <input

            onChange={changeFunc}
            placeholder="Enter your userName"
            name="userName"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <label>email</label>
          <input
            onChange={changeFunc}
            placeholder="Enter Your Email"
            name="email"
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <label>password</label>
          <input

            onChange={changeFunc}
            type="password"
            name="password"
            placeholder="Enter Your Password"
          />
        </div>
        <button style={{
          backgroundColor:'orange',
          color:'white',
          fontSize:25,
          padding:'10px 25px',
          marginTop:20,
          borderRadius:25
        }} type="submit">Sign Up</button>
        {isLoading && <ScaleLoader color="green"/>}
      </form>
    </div>
  );
};

export default SignUpForm;
