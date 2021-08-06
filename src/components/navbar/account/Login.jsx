import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Axios from "axios";

import { login } from ".././../../features/userSlice";
import ErrorNotice from "../../UIkit/ErrorNotice";

const Signup = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();

  const submit = async (e) => {
    e.preventDefault();
    try {
      const loginUser = { email, password };
      const loginRef = await Axios.post(
        "http://localhost:2000/users/login",
        loginUser
      );

      dispatch(login({ user: loginRef.data.user, token: loginRef.data.token }));
      localStorage.setItem("auth-token", loginRef.data.token);
      history.push("/");
    } catch (err) {
      console.log(err);
      err.response?.data.msg && setError(err.response.data.msg);
    }
  };

  return (
    <div className="pt-28 flex flex-col items-center">
      <h2 className="py-6">Log In</h2>

      {error && (
        <ErrorNotice message={error} clearError={() => setError(undefined)} />
      )}

      <div>
        <form onSubmit={submit}>
          <div className="input_wrapper">
            <label>Email</label>
            <input
              type="email"
              id="login-email"
              name="login-email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_wrapper">
            <label>Password</label>
            <input
              type="password"
              id="login-password"
              name="login-password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="text-center">
            <input className="input_btn" type="submit" value="Log in" />
          </div>
        </form>
      </div>
      <div className="text-center">
        <p>You don't have an account?</p>
        <Link to="/signup">
          <a className="a_tag">Sign up</a>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
