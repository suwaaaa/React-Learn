import React, { useState, useEffect } from "react";
import '../style/Login.css';
import axios from "axios";

function UserNameInput({ name, onChange }) {
  return (
      <>
        <input className="userNameInput" type="text" placeholder="Username"
            value={name} onChange={onChange} />
      </>  
  );
}
function PasswordInput({ psw, onChange }) {
  return (
      <>
        <input className="passwordInput" type="password" placeholder="Password"
            value={psw} onChange={onChange} />
      </>  
  );
}

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageStyle, setMessageStyle] = useState({});
  const [serverInfo, setServerInfo] = useState(null);

  // useEffect
  useEffect(() => {
    const fetchServerInfo = async () => {
      try {
        const response = await axios.get('http://localhost:10087/server');
        console.log(response.data);
        setServerInfo(response.data);
      } catch (error) {
        console.error("服务器信息获取失败:", error);
        setServerInfo({ serverName: '服务器信息获取失败', loginBtnLable: '失败' });
      }
    };
    fetchServerInfo();
  }, []);

  const loginSubmit = async () => {
    console.log("Username:", userName);
    console.log("Password:", password);
    if (!userName || !password) {
      setMessage("用户名和密码不能为空！");
      setMessageStyle({ color: "red" });
      return;
    }
    /**
        npm install axios
        npm install -g json-server 
        本地模拟api： 
        1. json-server --watch userDB.json --port 10086
        2. json-server --watch systemInfo.json --port 10087
        需要异步获取: async, await
    */
    try {
      const response = await axios.get('http://localhost:10086/users');
      const users = response.data;
      console.log(users);
      const user = users.find(u => u.userName === userName && u.password === password);

      if (user) {
            setMessage("登录成功");
            setMessageStyle({ color: "green" });
          } else {
            setMessage("用户名或密码错！");
            setMessageStyle({ color: "red" });
          }
      } catch (error) {
        console.error("Error fetching users:", error);
        setMessage("登录出错，请再试！");
        setMessageStyle({ color: "red" });
      }
    }
  
  return (
      <>
          <div className="center">
            <h1>{serverInfo ? serverInfo.serverName : 'Loading...'}</h1>
            <UserNameInput value={userName} onChange={(e) => setUserName(e.target.value)} />
            <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={loginSubmit}>{serverInfo ? serverInfo.loginBtnLable : 'Loading...'}</button>
            <div style={messageStyle}>{message}</div>
          </div>
      </>    
  );
}

export default Login;