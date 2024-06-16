import React, { useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import axios from "axios";
import { Spin } from "antd"; //npm install antd axios mockjs
import '../style/Login.css';

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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchServerInfo = async () => {
      try {
        setLoading(true);
        const response = await axios.get('/server');
        setServerInfo(response.data.server);
        setLoading(false);
      } catch (error) {
        console.error("服务器信息获取失败:", error);
        setServerInfo({ serverName: '服务器信息获取失败', loginBtnLable: '重试' });
        setLoading(false);
      }
    };
    fetchServerInfo();
  }, []);

  const handleLogin = async () => {
    setLoading(true);
    await login(userName, password);
    setLoading(false);
  };

  return (
    <div className="center">
      <h1>{serverInfo ? serverInfo.serverName : 'Loading...'}</h1>
      <Spin spinning={loading}>
        <UserNameInput name={userName} onChange={(e) => setUserName(e.target.value)} />
        <PasswordInput psw={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>{serverInfo ? serverInfo.loginBtnLable : 'Loading...'}</button>
        <div style={messageStyle}>{message}</div>
      </Spin>
    </div>
  );
}

export default Login;
