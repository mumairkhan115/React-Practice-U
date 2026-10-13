/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { DashboardOutlined, ReadOutlined } from '@ant-design/icons';
import { Layout, Menu, Typography, Flex } from 'antd';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import "./AppLayout.scss";



const { Content, Header, Sider } = Layout;
const { Title } = Typography;


const menuItems = [
  {
    key: '/',
    icon: <DashboardOutlined />,
    label: 'Dashboard',
  },
  {
    key: '/practice',
    icon: <ReadOutlined />,
    label: 'Practice',
  },
];

function AppLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const pageTitle =
    menuItems.find(({ key }) => key === location.pathname)?.label ?? 'My Practice';

  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="h-screen">
      <Sider collapsible theme="light" collapsed={collapsed} onCollapse={setCollapsed}>
        {!collapsed && (
            <Flex className="py-3 px-6 delay-visible">
              <Title level={4} className="my-2 whitespace-nowrap">
                Umair Khan
              </Title>
            </Flex>
          )}
        <Menu
          theme="light"
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>
      <Layout>
        <Header 
          style={{ background: '#fff', padding: '0 24px' }}
          >
          <Title 
            level={4} style={{ margin: 0, lineHeight: '64px' }}
            >
            {pageTitle}
          </Title>
        </Header>
        <Content style={{ minWidth: 0, padding: 24 }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default AppLayout;
