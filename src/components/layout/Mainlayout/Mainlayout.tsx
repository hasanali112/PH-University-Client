import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

const { Header, Content } = Layout;

const Mainlayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Mainlayout;