import { ConfigProvider, Layout } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const { Header, Footer, Sider } = Layout;

const App = () => {

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
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}
         />
        <Layout style={{ minHeight: '100vh' }}>
          <Header>
            <h1 style={{ color: '#03045e ' }} >Plantões</h1>
          </Header>
          <Outlet />
          <Footer />
        </Layout>
      </Layout>
      </ConfigProvider>   
    </div>
  )
}

export default App;