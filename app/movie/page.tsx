"use client";
import React from "react";
import { Layout, theme } from "antd";
import Navbar from "@/components/Navbar";
import ListMovie from "@/components/ListMovie";
import { Provider } from "react-redux";
import store from "@/lib/store";

const { Content } = Layout;

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Provider store={store}>
      <Layout>
        <Navbar />
        <Content style={{ padding: "0 48px" }}>
          <div
            style={{
              marginTop: 100,
              padding: 24,
              minHeight: 500,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <ListMovie />
          </div>
        </Content>
      </Layout>
    </Provider>
  );
};

export default App;
