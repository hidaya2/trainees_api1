import axios from "react";
import { createContext, useReducer } from "react";
import userReducer from "../reducers/userReducer";

const initialState = {
  loading: true,
  trainees: [],
  error: null,
};

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  //user login
  async function loginUser(user) {
    const config = {
      headers: {
        "Context-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "https://traineesapi-hidaya.herokuapp.com/api/v1/users/login",
      user,
      config
    );
    await localStorage.setItem("useInfo", JSON.stringify(data.data));
    const userLogin = (await localStorage.getItem("userInfo"))
      ? JSON.parse(localStorage.getItem("userInfo"))
      : {};
    dispatch({
      type: "USER_LOGIN",
      payload: userLogin,
    });
  }
  //regiter user
  async function registerUser(newuser) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        "https://traineesapi-hidaya.herokuapp.com/api/v1/users/register",
        newuser,
        config
      );

      dispatch({
        type: "REGISTER_USER",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  }

  //logout
  const logout = async () => {
    await localStorage.removeItem("userInfo");
    dispatch({
      type: "LOGOUT",
    });
  };

  return (
    <UserContext.Provider
      value={{
        loginUser,
        user: state.user,
        isPending: state.isPending,
        registerUser,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
