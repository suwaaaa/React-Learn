import { useState, useEffect, useCallback  } from "react";
import axios from "axios";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState({});
  const [tokenExpiry, setTokenExpiry] = useState(null);

  const login = async (userName, password) => {
    try {
      const response = await axios.post('/login', { userName, password });
      if (response.data.success) {
        setIsAuthenticated(true);
        setMessage("登录成功");
        setMessageStyle({ color: "green" });
        setTokenExpiry(Date.now() + 60 * 1000); // Token valid for 1 minute
      } else {
        setMessage("用户名或密码错！");
        setMessageStyle({ color: "red" });
      }
    } catch (error) {
      console.error("Error during login:", error);
      setMessage("登录出错，请再试！");
      setMessageStyle({ color: "red" });
    }
  };

  const logout = useCallback(() => {
    setIsAuthenticated(false);
    setMessage("");
    setMessageStyle({});
    setTokenExpiry(null);
  }, []);

  const isLogin = useCallback(() => {
    if (tokenExpiry && Date.now() > tokenExpiry) {
      logout();
    }
    return isAuthenticated;
  }, [tokenExpiry, logout, isAuthenticated]);

  useEffect(() => {
    const interval = setInterval(() => {
      isLogin();
    }, 1000);
    return () => clearInterval(interval);
  }, [isLogin]);

  return { login, logout, isLogin, message, messageStyle };
};
