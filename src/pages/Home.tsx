import { ConfigProvider, Layout } from "antd";
import Menu from "../components/Layout/Menu";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const { Sider, Header, Footer} = Layout;

const Home = () => {

  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="container">
      <ConfigProvider theme={{
        components: {
          Layout: {
            siderBg: '#0077b6',
            triggerBg: '#0077b6',
            headerBg: '#0077b6',
            bodyBg: '#caf0f8',
            footerBg: '#caf0f8'
          }
        }
      }}>
      <Layout style={{ minHeight: '100vh', }}>
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <Menu collapsed={collapsed}/>
        </Sider>
        <Layout style={{ minHeight: '100vh' }}>
          <Header>
            <h1 style={{ color: 'var(--cor-titulo)' }} >Plantões</h1>
          </Header>
          <Outlet />
          <Footer />
        </Layout>
      </Layout>
      </ConfigProvider>   
    </div>
  );
};

export default Home;