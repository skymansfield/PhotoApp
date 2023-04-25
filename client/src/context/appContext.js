import React, { useState, useReducer, useContext } from "react";
import reducer from "./reducers";
import {
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
} from "./actions";
import axios from "axios";

const user = localStorage.getItem("user");
const token = localStorage.getItem("token");

const initialState = {
  user: user ? JSON.parse(user) : null,
  token: token,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addUserToLocal = ({ user, token }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
  };

  const removeUser = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };

  const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });

    try {
      const response = await axios.post("/api/v1/auth/register", currentUser);
      console.log(response);

      const { user, token } = response.data;

      dispatch({
        type: REGISTER_USER_SUCCESS,
        payload: { user, token },
      });

      addUserToLocal({ user, token });
    } catch (error) {
      console.log(error.response);

    

      dispatch({
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg },
      });
    }
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });

    try {
      const { data } = await axios.post("/api/v1/auth/login", currentUser);
      const { user, token } = data;

      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: { user, token },
      });

addUserToLocal({user, token})

    } catch (error) {

      dispatch({
        type: LOGIN_USER_ERROR,
        payload: {msg: error.response.data.msg}
      })
    }
  };

  return (
    <AppContext.Provider value={{ ...state, registerUser, loginUser }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext, initialState };
