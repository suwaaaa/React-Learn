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
