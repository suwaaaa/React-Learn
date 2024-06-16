import React, { useEffect } from 'react';
import { Layout, Menu, Spin } from 'antd';
import { useAuth } from './useAuth';
import { Link, useNavigate } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const AppLayout = ({ children }) => {
  const { isLogin, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin()) {
      navigate('/login');
    }
  }, [isLogin, navigate]);

  if (!isLogin()) {
    return null; // 或者返回一个加载中的组件
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="3" onClick={logout}>
            Logout
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>My App</Header>
        <Content style={{ margin: '16px' }}>
          <Spin spinning={false}>{children}</Spin>
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
