import { FunctionComponent } from "react";
import { NavBar, SideBar } from "../components";

export const Header: FunctionComponent = () => {
  return (
    <div className="Header">
      <SideBar />
    </div>
  );
};
