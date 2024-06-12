// 1. 使用自定义 Hook 封装登录逻辑
// 我们可以创建一个自定义 Hook 来封装登录、登出和检查登录状态的逻辑。
// useAuth.js
import { useState } from "react";
import axios from "axios";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState({});

  const login = async (userName, password) => {
    try {
      const response = await axios.post('/login', { userName, password });
      if (response.data.success) {
        setIsAuthenticated(true);
        setMessage("登录成功");
        setMessageStyle({ color: "green" });
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

  const logout = () => {
    setIsAuthenticated(false);
    setMessage("");
    setMessageStyle({});
  };

  const isLogin = () => {
    return isAuthenticated;
  };

  return { login, logout, isLogin, message, messageStyle };
};

// 2. 引入 axios 包，完成真实的访问后台接口的登录代码
// 在上面的 useAuth Hook 中，我们已经用 axios 实现了登录接口的调用。接下来我们需要在组件中使用这个 Hook。
// Login.js
import React, { useState, useEffect } from "react";
import '../style/Login.css';
import { useAuth } from "./useAuth";
import axios from "axios";

function UserNameInput({ name, onChange }) {
  return (
      <input className="userNameInput" type="text" placeholder="Username"
             value={name} onChange={onChange} />
  );
}
function PasswordInput({ psw, onChange }) {
  return (
      <input className="passwordInput" type="password" placeholder="Password"
             value={psw} onChange={onChange} />
  );
}

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [serverInfo, setServerInfo] = useState(null);
  const { login, message, messageStyle } = useAuth();

  useEffect(() => {
    const fetchServerInfo = async () => {
      try {
        const response = await axios.get('/server');
        setServerInfo(response.data.server);
      } catch (error) {
        console.error("服务器信息获取失败:", error);
        setServerInfo({ serverName: '服务器信息获取失败', loginBtnLable: '重试' });
      }
    };
    fetchServerInfo();
  }, []);

  const handleLogin = () => {
    login(userName, password);
  };

  return (
    <div className="center">
      <h1>{serverInfo ? serverInfo.serverName : 'Loading...'}</h1>
      <UserNameInput name={userName} onChange={(e) => setUserName(e.target.value)} />
      <PasswordInput psw={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>{serverInfo ? serverInfo.loginBtnLable : 'Loading...'}</button>
      <div style={messageStyle}>{message}</div>
    </div>
  );
}

export default Login;

// 3. 引入 mock.js 包，模拟后台接口的实现
// 为了模拟后台接口，可以使用 mock.js。首先，需要安装 mock.js：

// npm install mockjs


// 在项目中创建一个 mock 文件夹，并在其中定义 mock 数据：
// mock/index.js
import Mock from "mockjs";

Mock.mock('/login', 'post', (options) => {
  const { userName, password } = JSON.parse(options.body);
  if (userName === 'tom' && password === '123') {
    return {
      success: true,
      message: "登录成功"
    };
  } else {
    return {
      success: false,
      message: "用户名或密码错误"
    };
  }
});

Mock.mock('/server', 'get', {
  server: {
    serverName: "Login Page",
    loginBtnLable: "登录"
  }
});

// 在项目入口文件中引入 mock：
// index.js or App.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./mock"; // 引入 mock 文件

ReactDOM.render(<App />, document.getElementById("root"));


// 完整代码结构
// src/useAuth.js
// src/Login.js
// src/mock/index.js
// src/index.js 或 src/App.js
// 这将创建一个完整的登录系统，其中包括登录、登出和检查登录状态的功能。数据加载完成后，将从模拟的后台接口中获取服务器信息并显示在页面上。