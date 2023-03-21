import { FunctionComponent, useState } from "react";
import sidebarLogo from "../assets/list.svg";

export const SideBar: FunctionComponent = () => {
  return (
    <div className="NavBar">
      <a href="">
        <img src={sidebarLogo} className="SideBar" alt="SideBar logo" />
      </a>
      <nav>
        <ul>
          <li><a href="#"></a> </li>
          <li><a href="#"></a> </li>
          <li><a href="#"></a> </li>
          <li><a href="#"></a> </li>
          <li><a href="#"></a> </li>
          <li><a href="#"></a> </li>
          <li><a href="#"></a> </li>
          <li><a href="#"></a> </li>
          <li><a href="#"></a> </li>
        </ul>
      </nav>
    </div>
  );
};
