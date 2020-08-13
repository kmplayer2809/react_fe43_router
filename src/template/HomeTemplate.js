import React from "react";
import Navbar from "./../components/Navbar";
import { Route } from "react-router-dom";
function HomeLayout(props) {
  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
}
export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
