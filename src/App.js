import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeLayout from "./containers/Home";
import AdminLayout from "./containers/Admin";
import AboutPage from "./containers/Home/AboutPage";
import HomePage from "./containers/Home/HomePage";
import ListMovie from "./containers/Home/ListMovie";
import DashboardPage from "./containers/Admin/Dashboard";
import AddUserPage from "./containers/Admin/AddUserPage";
import PageNotFound from "./containers/PageNotFound";
import { routesAdmin, routesHome } from "./routes";
import HomeTemplate from "./template/HomeTemplate";
import AdminTemplate from "./template/AdminTemplate";


function App() {
  const showHomeLayout = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate 
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  const showAdminLayout = (routes) => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };

  // clousure
  return (
    <BrowserRouter>
    {/* Gọi navbar ở ngoià Switch */}

      <Switch>
        {/* Trang Home */}
        {/* <Route exact path="/" component={HomeLayout} />
        <Route path="/about" component={AboutPage} />
        <Route path="/home" component={HomePage} />
        <Route path="/list-movie" component={ListMovie} /> */}
        {showHomeLayout(routesHome)}

        {/* Trang Admin */}
        {/* <Route path="/admin" component={AdminLayout} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/add-user" component={AddUserPage} /> */}
        {showAdminLayout(routesAdmin)}

        {/* Page Not Found  để cuối cùng*/}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
