import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import {
  addAccessToken,
  getAccessToken,
  removeAccessToken,
} from "../utils/local-storage";
import axios from "../config/axios";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [checkUser, setCheckUser] = useState(null);
  console.log(`check Number1 ${checkUser} shold be null`);
  useEffect(() => {
    if (getAccessToken()) {
      axios
      .get("/auth/me")
      .then((result) => {
        setCheckUser(result.data.user);
        console.log(result.data.user);
      });
    }
  }, []);
  console.log(`check Number2 ${checkUser}`);
  const login = async (credential) => {
    const res = await axios.post("/auth/login", credential);
    console.log(res);
    addAccessToken(res.data.accessToken);
    setCheckUser(res.data.user);
    console.log(`30line: ${res.data.user}`);
  };

  const register = async (registerInputObj) => {
    const res = await axios.post("/auth/register", registerInputObj);
    addAccessToken(res.data.accessToken);
    setCheckUser(res.data.user);
  };

  const logout = () => {
    removeAccessToken();
    setCheckUser(null);
  };

  return (
    <AuthContext.Provider value={{ login, register, checkUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
