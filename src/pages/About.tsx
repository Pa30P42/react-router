import React from "react";
import { Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About page</h1>
      <Outlet />
    </div>
  );
};

export default About;
