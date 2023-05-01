import React, { useState, useEffect } from "react";
import FormInput from "../components/FormInput";
import { useAppContext } from "../context/appContext";
import "../pages/Register.css";
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const { registerUser, user, loginUser } = useAppContext();

  const navigate = useNavigate();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { email, password, isMember } = values;

    if (!email || !password) {
      return;
    }
    const currentUser = { email, password };
    if (isMember) {
      loginUser(currentUser);
    } else {
      registerUser(currentUser);
    }
  };

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [user, navigate]);

  return (
    <div className="img bg-cover bg-center h-screen flex items-center justify-center h-screen">
      <div className="w-full max-w-md bg-gray-400 rounded-lg shadow-md p-8">
        <form className="" onSubmit={handleSubmit}>
          <h1 className="text-center text-3xl font-bold mb-8">
            {values.isMember ? "Login" : "Register"}
          </h1>
          <FormInput
            type="email"
            value={values.email}
            name="email"
            handleChange={handleChange}
          />

          <FormInput
            type="password"
            value={values.password}
            name="password"
            handleChange={handleChange}
          />
          <div className="text-center">
            <button
              className="bg-blue-700 hover:bg-blue-500 text-white font-bold my-2 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
          <br />
          <p className="text-center">
            {!values.isMember ? "Already a member?   " : "Not a member?   "}
            <button className="underline font-bold" onClick={toggleMember}>
              {!values.isMember ? "Login" : "Register"}
            </button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
