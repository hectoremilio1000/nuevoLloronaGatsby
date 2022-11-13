import React, { useEffect, useState } from "react";
import { Layout, Menu } from "antd";
import { Button } from "react-bootstrap";
import itemsRoutes from "../ItemsRoutes/index";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import CrearInventario from "../Cervezas/CrearInventario/index";
import RevisarInventario from "../Cervezas/RevisarInventario/index";
import InventarioNuevo from "../InventarioNuevo";
import InventarioProductos from '../PruebaInventario/InventarioProductos';
import ListaHoteles from '../Hoteles/ListaHoteles';
import CrearHotel from '../Hoteles/CrearHotel';
import CrearProductoPrueba from '../PruebaInventario/CrearProductoPrueba';
import { DataStore } from "aws-amplify";

const { Sider, Header, Content } = Layout;

function LayoutAdministrador({ signOut }) {
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");

  const toggle = () => {
    setCollapsed(!collapsed);
  };
  const cambiarComponent = e => {
    setCurrent(e.key);
  };

  // const clearCacheData = () => {
  //   caches.keys().then(names => {
  //     names.forEach(name => {
  //       caches.delete(name);
  //     });
  //   });
  //   console.log("Complete Cache Cleared");
  // };

  // const clearDataStore = async () => {
  //   await DataStore.clear();
  //   console.log('datastore clearead')
  // }



  
  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            selectedKeys={current}
            onClick={cambiarComponent}
            items={itemsRoutes}
          ></Menu>
        </Sider>
        <Layout>
          <Header
            className="site-layout-sub-header-background"
            style={{
              padding: 0,
              height: 100,
              display: "flex",
              justifyContent: "space-around",
              backgroundColor: "white",
            }}
          >
            <div>
              {React.createElement(
                collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                {
                  className: "trigger hamburguesaMenu",
                  onClick: toggle,
                }
              )}
            </div>
            <div>
              <p
                style={{ textAlign: "center" }}
                className="textAdminHeader text-dark"
              >
                Administrador, hola
              </p>
            </div>
          </Header>
          <Content style={{ margin: "24px 16px 0" }}>
            {current === "1" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <CrearInventario />
              </div>
            ) : current === "2" ? (
              <div
                className="site-layout-background"
                style={{ minHeight: 100 }}
              >
                <RevisarInventario />
              </div>
            ) : current === "3" ? (
              <div className="site-layout-bckground" style={{ minHeight: 100 }}>
                {/* <InventarioNuevo /> */}
              </div>
            ) : current === "4" ? (
              <div className="site-layout-bckground" style={{ minHeight: 100 }}>
                <InventarioProductos />
              </div>
            ) : current === "5" ? (
              <div className="site-layout-bckground" style={{ minHeight: 100 }}>
                <CrearProductoPrueba />
              </div>
            ) : current === "6" ? (
              <div className="site-layout-bckground" style={{ minHeight: 100 }}>
                <ListaHoteles />
              </div>
            ) : current === "7" ? (
              <div className="site-layout-bckground" style={{ minHeight: 100 }}>
                <CrearHotel />
              </div>
            ) : (
              <div style={{}}></div>
            )}
          </Content>
        </Layout>
      </Layout>
      <Button onClick={signOut} variant="warning" style={{ width: "100%" }}>
        Cerrar Sesión
      </Button>
    </>
  );
}

export default LayoutAdministrador;
