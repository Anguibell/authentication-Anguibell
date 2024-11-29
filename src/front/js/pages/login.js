import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const {actions , store} = useContext(Context)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate()
  const login = async (e) => {
    e.preventDefault()
    let info = {
        email: email,
        password: password
    }
    let resp = await actions.login(info)
    if (resp) {
        navigate("/demo")
    } else {
        alert('datos incorrectos')
    }
  }

  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={(e) => login(e)}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
