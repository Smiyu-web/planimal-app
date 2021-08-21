import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Axios from "axios";

import { login } from ".././../../features/userSlice";
import Notice from "../../UIkit/Notice";

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
        `${process.env.REACT_APP_SERVER_URL}/users/login`,

        loginUser
      );

      await dispatch(
        login({ user: loginRef.data.user, token: loginRef.data.token })
      );
      localStorage.setItem("auth-token", loginRef.data.token);
      history.push("/");
    } catch (err) {
      setError(err.response.data.msg);
      console.log(err.response.data.msg);
    }
  };

  return (
    <div className="my-16 flex flex-col items-center">
      <h2 className="mb-10">Log In</h2>

      {error && <Notice message={error} clear={() => setError(undefined)} />}

      <div>
        <form onSubmit={submit}>
          <div className="input_wrapper">
            <label className="input_label">Email</label>
            <input
              type="email"
              id="login-email"
              name="login-email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input_wrapper">
            <label className="input_label">Password</label>
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
          <div className="a_tag">Sign up</div>
        </Link>
      </div>
    </div>
  );
};

export default Signup;
