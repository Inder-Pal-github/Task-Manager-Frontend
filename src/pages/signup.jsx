import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../index.css";
import axios from "axios";

const url = "http://localhost:8080"
// const url = "https://clever-mite-overcoat.cyclic.app"

const Signup = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const SignupUser = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${url}/auth/register`,
        user
      );
      alert(data.message);
      setUser({});
      navigate("/");
    } catch (error) {
      const errorResponse = error.response.data.error;
      alert(errorResponse.message);
    }
  };
  return (
    <>
      <fieldset>
        <legend>
          <h1>Signup</h1>
        </legend>
        <form onSubmit={SignupUser}>
          <label htmlFor="name">Name: </label>
          <input
            onChange={(e) => handleInputChange(e)}
            type="text"
            name="name"
            id="name"
          />
          <br />
          <hr />
          <label htmlFor="email">Email: </label>
          <input
            onChange={(e) => handleInputChange(e)}
            type="email"
            name="email"
            id="email"
          />
          <br />
          <hr />
          <label htmlFor="password">Password: </label>
          <input
            onChange={(e) => handleInputChange(e)}
            type="password"
            name="password"
            id="password"
          />
          <br />
          <hr />
          <input type="submit" value="Signup" />
        </form>
        <p>
          <b>Already have an account: </b>
          <Link to="/">Login</Link>
        </p>
        <div className="oauth">
          <button>Continue with Google</button>
          <br />
          <button>
            <a href="https://github.com/login/oauth/authorize?client_id=299d269ce9ecca814fc0">
              Continue with GitHub
            </a>
          </button>
        </div>
      </fieldset>
    </>
  );
};

export default Signup;
