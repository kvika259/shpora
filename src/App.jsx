import { Routes, Route, Navigate, useNavigate } from "react-router";
import { Layout, Menu, theme } from "antd";
import Git from "./pages/Git";
import FSD from "./pages/FSD";
import Events from "./pages/Events";
import State from "./pages/State";
import Props from "./pages/Props";
import Lists from "./pages/Lists";
import Context from "./pages/Context";
import UseEffect from "./pages/UseEffect";
import Memo from "./pages/Memo";
import Router from "./pages/Router";
import Lazy from "./pages/Lazy";
import Form from "./pages/Form";
import Desing from "./pages/Desing";
import Storage from "./pages/Storage";
import RenderInfo from "./pages/RenderInfo";
const { Header, Content, Footer, Sider } = Layout;
const siderStyle = {
  overflow: "auto",
  height: "100vh",
  position: "sticky",
  insetInlineStart: 0,
  top: 0,
  scrollbarWidth: "thin",
  scrollbarGutter: "stable",
};
const items = [
  { path: "git", name: "Новый проект и Git" },
  { path: "fsd", name: "Архитектура проекта" },
  { path: "props", name: "Props" },
  { path: "state", name: "State" },
  { path: "events", name: "Events" },
  { path: "lists", name: "Списки, key, fragment" },
  { path: "useEffect", name: "useEffect" },
  { path: "render", name: "Рендер, reconciliation и Virtual DOM" },
  { path: "context", name: "Context" },
  { path: "memo", name: "Memo" },
  { path: "router", name: "React Router" },
  { path: "lazy", name: "React.lazy и Suspense" },
  { path: "form", name: "Form" },
  { path: "desing", name: "Design" },
  { path: "storage", name: "localStorage и sessionStorage" },
].map((item, index) => ({
  key: item.path,
  label: item.name,
}));
const App = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const currentYear = new Date().getFullYear();
  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          onClick={({ key }) => navigate(`/${key}`)}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div
            style={{
              padding: 24,
              textAlign: "left",
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Routes>
              <Route
                path="/"
                element={"Начнём вспоминать курс. Выбери главу"}
              />
              <Route path="/git" element={<Git />} />
              <Route path="/fsd" element={<FSD />} />
              <Route path="/props" element={<Props />} />
              <Route path="/state" element={<State />} />
              <Route path="/events" element={<Events />} />
              <Route path="/lists" element={<Lists />} />
              <Route path="/useEffect" element={<UseEffect />} />
              <Route path="/render" element={<RenderInfo />} />
              <Route path="/context" element={<Context />} />
              <Route path="/memo" element={<Memo />} />
              <Route path="/router" element={<Router />} />
              <Route path="/lazy" element={<Lazy />} />
              <Route path="/form" element={<Form />} />
              <Route path="/desing" element={<Desing />} />
              <Route path="/storage" element={<Storage />} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Создано с помощью Ant Design ©{currentYear}
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
