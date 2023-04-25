import React, { useState, useEffect } from "react";
import FormInput from "../components/FormInput";
import { useAppContext } from "../context/appContext";
import "../pages/Register.css"
import { useNavigate } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  const { registerUser, user, loginUser } = useAppContext();

  const navigate = useNavigate()

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
      loginUser(currentUser)
    } else {
      registerUser(currentUser);
    }
  };
  
useEffect(()=>{

if(user) {
setTimeout(()=> {

navigate('/')

}, 2000)
}

},[user,navigate])

  return (
    <div className="formcan">
      <form onSubmit={handleSubmit}>
        <h1>{values.isMember ? "Login" : "Register"}</h1>
        <FormInput
          type="email"
          value={values.email}
          name="email"
          handleChange={handleChange}
        />
        <br/>
        <FormInput
          type="password"
          value={values.password}
          name="password"
          handleChange={handleChange}
        />
        <br/>
        <button type="submit">Submit</button>
  
      <br/>
      <p>

        {!values.isMember ? "Already a member?" : "Not a member?"}
        <button className="register" type="button" onClick={toggleMember}>
          {!values.isMember ? "Login" : "Register"}
        </button>
      </p>
      </form>
    </div>
    // here we go again
  );
};

export default Register;
